<template>
  <div class="projects-section -section">
    <SectionHeader
      :title="copy.title"
      :description="copy.description"
      :color="palette[2]"
    />
    <ProjectsProjectList
      v-if="false"
      :questions="questions"
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
      copy: copy.projects
    }
  }

}
</script>

