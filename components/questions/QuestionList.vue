<template>
  <div class="question-list">
    <QuestionsQuestionListItem
      v-for="(item, index) in questions"
      :key="index"
      :index="index"
      :question="item"
      :palette="palette"
      :hash="hash"
    />
  </div>
</template>

<script>
export default {

  props: [
    'questions',
    'palette'
  ],

  data() {
    return {
      hash: null
    }
  },

  mounted() {
    if(process.browser) {
      window.addEventListener('hashchange', this.hashChange.bind(this))
      
      this.updateHash()
    }
  },

  methods: {
    hashChange() {
      this.updateHash()
    },

    updateHash() {
      const hash = window.location.hash

      if(!!hash && hash.length > 1) {
        this.hash = hash.substr(1)
      } else {
        this.hash = null
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.question-list {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 800px;
}

</style>

