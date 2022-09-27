<template>
  <div
    :id="elementId"
    class="project-list-item" 
    role="button"
    @mouseenter="hover" 
    @mouseleave="unhover"
  >
    <BoxSideDepth
      :color="color"
      :hovering="hovering"
    />
    <h3><a :href="'#project-'+this.project.id">{{ name }}</a></h3>
    <p v-if="description" v-html="shortenedDescription" />
    <ProjectsListItemIdeas
      :project="project"
      :ideas="ideas"
      align="center"
    />
    <SuperButton
      :link="'#project-'+this.project.id"
      label="More info"
      size="small"
      :color="color"
      :invert="true"
    />
  </div>
</template>

<script>
export default {

  props: [
    'palette',
    'project',
    'ideas',
    'color'
  ],

  data() {
    return {
      hovering: false
    }
  },

  computed: {
    elementId() {
      return 'project-summary-'+this.project.id
    },

    name() {
      return this.project.fields.Name
    },

    description() {
      return this.project.fields.Description
    },

    shortenedDescription() {
      let result = this.project.fields.Description

      if(result.length > 100) {
        result = result.substr(0, 98) //  <b>more</b>

        const lastIndex = result.lastIndexOf(' ')
        if(lastIndex > result.length - 10) {
          result = result.substr(0, lastIndex)
        }

        result += '...'
      }

      return result
    }
  },

  methods: {
    hover() {
      this.hovering = true
    },

    unhover() {
      this.hovering = false
    }
  }

}
</script>

<style lang="scss">

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.project-list-item {
  position: relative;
  background-color: white;
  border: 1px solid black;
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 20px 40px;
  box-shadow: -8px 8px 0 rgba(black, 0.07);
  flex-grow: 1;
  transition: all 250ms $ease;
  box-sizing: border-box;

  h3 {
    text-align: center;
    @include r('font-size', 22, 27);
    font-weight: 900;

    a {
      color: black;
      text-decoration: none;
      transition: all 150ms $ease;

      &:hover {
        color: var(--palette-0);
        cursor: pointer;
      }
    }
  }

  p {
    margin: 10px 0 0 0;
    text-align: center;
    @include r('font-size', 15, 18);
    color: rgba(black, 0.75);

    a {
      color: black;
    }
  }

  > a {
    margin-top: 20px;
  }

  &:hover {
    transform: translate(-3px, 5px);
    box-shadow: -4px 4px 0 rgba(black, 0.15);
  }

  @include media-query(medium) {
    flex-basis: 40%;
  }

  @include media-query(large) {
    flex-basis: 26%;
  }
}

</style>


