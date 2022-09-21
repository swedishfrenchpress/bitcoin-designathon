<template>
  <div class="section-header">
    <h1>{{ title }}</h1>
    <p 
      v-if="description" 
      v-html="description"
    />
    <SuperButton
      v-if="link"
      :link="link"
      :label="linkLabel"
      :color="color"
    />
  </div>
</template>

<script>
export default {

  props: [
    'title',
    'description',
    'link',
    'linkLabel',
    'color'
  ]

}
</script>

<style lang="scss">

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.section-header {
  text-align: center;
  max-width: 900px;

  h1 {
    @include r('font-size', 24, 36);
    font-weight: 900;
    color: var(--front);
  }

  p {
    margin-top: 10px;
    @include r('font-size', 18, 22);

    a {
      color: var(--palette-0);
      transition: all 100ms $ease;

      &:hover {
        color: var(--palette-0);
      }
    }
  }

  .super-button {
    margin-top: 30px;
  }
}

</style>
