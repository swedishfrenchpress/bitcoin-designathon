<template>
  <div class="project-list-item">
    <h2>{{ name }}</h2>
    <p>{{ description }}</p>
    <div class="projects" v-if="projectList">
      <h3
        v-for="project in projectList"
        :key="project.id"
      >{{ project.fields.Name }}</h3>
    </div>
  </div>
</template>

<script>
export default {

  props: [
    'idea',
    'projects'
  ],

  computed: {
    name() {
      return this.idea.fields.Name
    },

    description() {
      return this.idea.fields.Description
    },

    projectList() {
      let result = []

      if(this.idea.fields.Projects) {
        let projectId, project, i, k
        for(i=0; i<this.idea.fields.Projects.length; i++) {
          projectId = this.idea.fields.Projects[i]

          for(k=0; i<this.projects.length; i++) {
            project = this.projects[i]

            if(project.id == projectId) {
              result.push(project)
            }
          }
        }
      }

      if(result.length == 0) {
        result = null
      }

      return result
    }
  }

}
</script>

