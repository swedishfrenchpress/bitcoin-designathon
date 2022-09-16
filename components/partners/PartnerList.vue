<template>
  <div class="partner-list">
    <PartnersPartnerListItem
      v-for="(item, index) in partners"
      :key="index"
      :partner="item"
    />
  </div>
</template>

<script>
export default {

  props: [
    'partners'
  ]

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/animations.scss";
@import "@/assets/css/mixins.scss";

.partner-list {
  display: flex;
  gap: 30px;
  max-width: 1280px;

  @include media-query(small) {
    flex-direction: column;
  }

  @include media-query(medium-up) {
    
  }
}

</style>

