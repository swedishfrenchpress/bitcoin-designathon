<template>
  <div :class="classObject">
    <h3 role="button" @click="toggleExpand">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0781 10.7682L6.64018 18.6332C5.98886 19.176 5 18.7128 5 17.865L5 2.13504C5 1.2872 5.98886 0.824045 6.64018 1.36682L16.0781 9.23178C16.5579 9.63157 16.5579 10.3684 16.0781 10.7682Z" :fill="palette[0]" stroke="black"/>
        </svg>{{ question.q }}</h3>
    <p v-if="expanded">{{ question.a }}</p>
  </div>
</template>

<script>
export default {

  props: [
    'question',
    'palette'
  ],

  data() {
    return {
      expanded: false
    }
  },

  computed: {
    classObject() {
      const c = ['question-list-item']

      if(this.expanded) {
        c.push('-expanded')
      }

      return c.join(' ')
    }
  },

  methods: {
    toggleExpand() {
      this.expanded = !this.expanded
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.question-list-item {
  border-top: 1px solid rgba(var(--frontRGB), 0.5);
  padding-top: 15px;
  padding-bottom: 15px;

  &:first-child {
    border-width: 0;
  }

  h3 {
    @include r('font-size', 18, 24);
    font-weight: 900;
    cursor: pointer;

    svg {
      margin-right: 10px;
      transition: all 150ms $ease;
      vertical-align: middle;

      path {
        stroke: var(--front);
      }
    }
  }

  p {
    margin-top: 5px;
    padding-left: 30px;
    @include r('font-size', 15, 22);
    // color: #606060;
  }

  &.-expanded {
    h3 {
      svg {
        transform: rotate(90deg);
      }
    }
  }
}

</style>


