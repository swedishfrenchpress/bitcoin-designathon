<template>
  <div class="info-section -section">
    <SectionHeader
      :title="copy.title"
      :description="copy.description"
      :palette="palette"
    />
  </div>
</template>

<script>
import copy from "~/assets/copy.json";

export default {

  props: [
    'palette'
  ],

  data() {
    return {
      copy: copy.info
    }
  }

}
</script>

<style lang="scss" scoped>

@import "@/assets/css/mixins.scss";

.info-section {
  
}

</style>