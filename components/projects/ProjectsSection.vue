<template>
  <div id="projects" class="projects-section -section">
    <SectionHeader
      :title="copy.title"
      :description="copy.description"
      :link="copy.link"
      :linkLabel="copy.linkLabel"
      :color="color"
    />
    <ProjectsList
      v-if="projects"
      :projects="cleanProjects"
      :ideas="ideas"
      :palette="palette"
      :color="color"
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
  },

  computed: {
    cleanProjects() {
      const result = []

      let project
      for(let i=0; i<this.projects.length; i++) {
        project = this.projects[i]

        if(project.fields.Name && 
          project.fields.Name.length > 0 && 
          project.fields.Description && 
          project.fields.Description.length > 0
        ) {
          result.push(project)
        }
      }

      return this.shuffle(result)
    },

    color() {
      return this.palette[2]
    }
  },

  methods: {
    shuffle(a) {
      let j, x, i;
      for(i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
      }
      return a;
    }
  }

}
</script>

