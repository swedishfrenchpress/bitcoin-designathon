<template>
  <div class="idea-list">
    <div class="wrap">
      <IdeasIdeaListItem
        v-for="item in filteredIdeas"
        :key="item.id"
        :palette="palette"
        :idea="item"
        :projects="projects"
        @select="select"
      />
    </div>
    <Pagination
      v-if="paginationPages > 1"
      :index="paginationIndex"
      :pages="paginationPages"
      :color="palette[0]"
      @paginate="paginate"
    />
    <IdeasIdeaListItemOverlay
      :activeId="activeId"
      :palette="palette"
      :ideas="ideas"
      :projects="projects"
      @close="closeOverlay"
    />
  </div>
</template>

<script>
export default {

  props: [
    'palette',
    'ideas',
    'projects'
  ],

  data() {
    return {
      activeId: null,
      paginationIndex: 0,
      perPage: 9
    }
  },

  computed: {
    paginationPages() {
      let result = 0

      if(this.ideas && this.ideas.length > 0) {
        result = Math.ceil(this.ideas.length / this.perPage)
      }

      return result
    },

    filteredIdeas() {
      let result = this.ideas

      if(this.paginationPages > 1) {
        const start = this.paginationIndex * this.perPage
        result = this.ideas.slice(start, start + this.perPage)
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
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.idea-list {
  margin-top: 30px;
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

