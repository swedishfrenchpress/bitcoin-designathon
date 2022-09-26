<template>
  <div class="project-list">
    <Pagination
      v-if="paginationPages > 1"
      :index="paginationIndex"
      :pages="paginationPages"
      :color="color"
      @paginate="paginate"
    />
    <div class="wrap">
      <ProjectsListItem
        v-for="item in filteredProjects"
        :key="item.id"
        :palette="palette"
        :project="item"
        :ideas="ideas"
        :color="color"
        @select="select"
      />
    </div>
    <ProjectsListItemOverlay
      :activeId="activeId"
      :palette="palette"
      :projects="projects"
      :ideas="ideas"
      :color="color"
      @close="closeOverlay"
    />
  </div>
</template>

<script>
export default {

  props: [
    'palette',
    'projects',
    'ideas',
    'color'
  ],

  data() {
    return {
      activeId: null,
      paginationIndex: 0,
      perPage: 9
    }
  },

  mounted() {
    // On load, check if deep-linking to an project
    // If so, show overlay and scroll to projects section
    // Hash is not available during build, so doing this here
    if(process.browser) {
      this.checkHash(true)
    }
  },

  computed: {
    paginationPages() {
      let result = 0

      if(this.projects && this.projects.length > 0) {
        result = Math.ceil(this.projects.length / this.perPage)
      }

      return result
    },

    filteredProjects() {
      let result = this.projects

      if(this.paginationPages > 1) {
        const start = this.paginationIndex * this.perPage
        result = this.projects.slice(start, start + this.perPage)
      }

      return result
    }
  },

  methods: {
    select(activeId) {
      this.activeId = activeId
    },

    closeOverlay() {
      if(process.browser) {
        if(window.location.hash == '#'+this.activeId) {
          history.pushState(null, null, '');
        }
      }

      this.activeId = null
    },

    paginate(page) {
      this.paginationIndex = page
    },

    checkHash(scrollToSection) {
      // Looks like #project-recd90OXCtbtOaMb5
      const fullHash = window.location.hash

      if(fullHash && fullHash.indexOf('-') !== -1) {
        let hash = fullHash.split('-')[1]

        for(let i=0; i<this.projects.length; i++) {
          if(this.projects[i].id == hash) {
            this.activeId = hash

            if(scrollToSection) {
              const projectSection = document.getElementById('projects')
              window.scrollTo(0, projectSection.offsetTop)
            }

            break;
          }
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.project-list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 1340px;
  }

  @include media-query(small) {
    .wrap {
      flex-direction: column;
    }
  }
}

</style>

