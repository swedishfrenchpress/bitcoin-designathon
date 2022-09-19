<template>
  <div :class="classObject" :style="styleObject">
    <Banner
      :isMobile="isMobile"
      :palette="palette"
      @hoverLetter="hoverBannerLetter"
      @unhoverLetter="unhoverBannerLetter"
    />
    <InfoSection :palette="palette" />
    <IdeasSection
      :palette="palette"
      :ideas="ideas"
      :projects="projects"
    />
    <ProjectsSection
      :palette="palette"
      :ideas="ideas"
      :projects="projects"
    />
    <SponsorSearchSection :palette="palette" />
    <PartnersSection :palette="palette" />
    <QuestionsSection :palette="palette" />
    <Footer :palette="palette" />
  </div>
</template>

<script>
export default {

  data() {
    /*

    1-3 for circles and letters
    4 for letter outline
    5 for background
    6 general light/dark theme

     */
    const palettes = [
      ['#E88BCA', '#B1F5FD', '#E63E2A', '#E63E2A'],
      ['#A64AC9', '#FFB38F', '#FD6E23', '#FFFFFF', '#1F185B', 'dark'],
      ['#EA2E00', '#16A9E1', '#17E9E0', '#FFFFFF'],
      ['#EA2E00', '#9DBDB8', '#ffcaaf', '#FFFFFF']
    ]

    const paletteIndex = Math.floor(Math.random()*palettes.length)

    let windowSize, isMobile

    if(process.browser) {
      windowSize = {
        width: window.innerWidth,
        height: window.innerHeight
      }

      isMobile = window.innerWidth < 640
    }

    return {
      windowSize,
      isMobile: isMobile,
      palettes,
      palette: palettes[paletteIndex],
      hoveredLetter: null,
      projects: null,
      ideas: null
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

  computed: {
    classObject() {
      const c = ['home']

      if(this.palette.length > 5) {
        c.push('-'+this.palette[5])
      }

      let paletteIndex = 0
      if(this.hoveredLetter) {
        paletteIndex = this.hoveredLetter%this.palettes.length
      }
      c.push('-palette-'+paletteIndex)

      return c.join(' ')
    },

    styleObject() {
      const s = {}

      if(this.palette.length > 4) {
        s.backgroundColor = this.palette[4]
      }

      return s
    }
  },

  methods: {
    hoverBannerLetter(letter) {
      this.hoveredLetter = letter
      this.palette = this.palettes[letter%this.palettes.length]
    },
    
    unhoverBannerLetter(letter) {
      if(this.hoveredLetter == letter) {
        this.hoveredLetter = null
      }
    },

    onResize() {
      if(process.browser) {
        this.windowSize = {
          width: window.innerWidth,
          height: window.innerHeight
        }

        this.isMobile = window.innerWidth < 640
      }
    }
  }

}
</script>
