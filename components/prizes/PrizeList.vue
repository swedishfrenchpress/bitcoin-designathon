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
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 30px;

  .wrap {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    max-width: 1340px;
  }

  @include media-query(small) {
    flex-direction: column;
  }

  @include media-query(medium-up) {
    
  }
}

</style>

