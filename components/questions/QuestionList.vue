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
    }
  },

  methods: {
    hashChange() {
      console.log('hashChange', window.location)
      this.hash = window.location.substr(1)
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

