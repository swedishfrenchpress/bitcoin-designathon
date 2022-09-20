<template>
  <div class="ideas-section -section">
    <SectionHeader
      :title="copy.title"
      :description="copy.description"
      :link="copy.link"
      :linkLabel="copy.linkLabel"
      :color="palette[0]"
    />
    <IdeasIdeaList
      v-if="ideas"
      :ideas="ideas"
      :projects="projects"
      :palette="palette"
    />
  </div>
</template>

<script>
import copy from "~/assets/copy.json";

export default {

  props: [
    'palette',
    'projects',
    'ideas'
  ],

  data() {
    return {
      copy: copy.ideas
    }
  }

}
</script>

