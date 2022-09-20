<template>
  <div class="idea-list">
    <IdeasIdeaListItem
      v-for="item in ideas"
      :key="item.id"
      :palette="palette"
      :idea="item"
      :projects="projects"
      @select="select"
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
      activeId: null
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
  gap: 30px;
  max-width: 1340px;

  @include media-query(small) {
    flex-direction: column;
  }
}

</style>

