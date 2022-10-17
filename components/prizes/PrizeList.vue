<template>
  <div class="prize-list">
    <PrizesPrizeListItem
      v-for="item in prizes"
      :key="item.id"
      :prize="item"
      :palette="palette"
      :color="color"
    />
  </div>
</template>

<script>
export default {

  props: [
    'prizes',
    'palette',
    'color'
  ],

  data() {
    return {

    }
  },

  computed: {

  },

  methods: {

  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.prize-list {
  @include r('margin-top', 80, 80);
  display: flex;

  @include media-query(medium-down) {
    flex-direction: column;
    gap: 120px;
    align-items: stretch;
  }

  @include media-query(large-mega) {
    gap: 30px;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
  }

  @include media-query(mega) {
    gap: 75px;
    align-items: stretch;
  }
}

</style>

