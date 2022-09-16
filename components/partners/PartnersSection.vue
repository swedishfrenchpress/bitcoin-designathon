<template>
  <div class="partner-section -section">
    <SectionHeader
      :title="copy.title"
      :description="copy.description"
      color="0"
    />
    <PartnersPartnerList :partners="partners" />
  </div>
</template>

<script>
import copy from "~/assets/copy.json";

export default {

  props: [

  ],

  data() {
    return {
      copy: copy.partners,
      partners: copy.partners.partners
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/mixins.scss";

.partner-section {

}

</style>



