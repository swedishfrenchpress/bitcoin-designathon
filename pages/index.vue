<template>
  <div class="home">
    <Banner :windowSize="windowSize" />
    <IdeaList
      v-if="false"
      :ideas="ideas"
      :projects="projects"
    />
  </div>
</template>

<script>
export default {

  data() {
    let windowSize

    if(process.browser) {
      windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }
    }

    return {
      windowSize
    }
  },

  async asyncData({ $axios, env }) {
    return {}

    // const baseUrl = 'https://api.airtable.com/v0/'

    // const ideasUrl = baseUrl + 'appE17V3A75B99zBa/Ideas?api_key=' + env.airtableApiKey
    // const ideas = await $axios.$get(ideasUrl)

    // const projectsUrl = baseUrl + 'appE17V3A75B99zBa/Projects?api_key=' + env.airtableApiKey
    // const projects = await $axios.$get(projectsUrl)

    // console.log('ideas', ideas)
    // console.log('projects', projects)

    // return {
    //   ideas: ideas.records,
    //   projects: projects.records
    // }
  },

  mounted() {
    window.addEventListener('resize', this.onResize.bind(this))
  },

  methods: {
    onResize() {
      if(process.browser) {
        this.windowSize = {
          width: window.innerWidth,
          height: window.innerHeight
        }
      }
    }
  }

}
</script>
