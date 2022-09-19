<template>
  <div class="question-list">
    <QuestionsQuestionListItem
      v-for="(item, index) in questions"
      :key="index"
      :index="index"
      :question="item"
      :palette="palette"
    />
  </div>
</template>

<script>
export default {

  props: [
    'questions',
    'palette'
  ]

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

