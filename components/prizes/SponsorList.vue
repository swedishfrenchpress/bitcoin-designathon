<template>
  <div class="sponsor-list">
    <PrizesSponsorListItem
      v-for="item in sponsors"
      :key="item.id"
      :sponsor="item"
      :palette="palette"
      :color="color"
    />
  </div>
</template>

<script>
export default {

  props: [
    'sponsors',
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

.sponsor-list {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  max-width: 1200px;

  @include media-query(small) {
    flex-direction: column;
  }

  @include media-query(medium-up) {

  }
}

</style>

