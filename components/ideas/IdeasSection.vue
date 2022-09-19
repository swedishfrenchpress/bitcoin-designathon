<template>
  <div class="questions-section -section">
    <SectionHeader
      :title="copy.title"
      :palette="palette"
      :link="copy.link"
      :linkLabel="copy.linkLabel"
    />
    <IdeasIdeaList
      v-if="false"
      :ideas="ideas"
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
      copy: copy.ideas,
      ideas: copy.ideas.ideas
    }
  }

}
</script>

