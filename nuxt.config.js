export default {
  env: {
    airtableApiKey: process.env.AIRTABLE_API_KEY
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bitcoin Designathon 2022',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#f2a900' },
      { name: 'theme-color', content: '#f2a900' },

      { property: 'og:title', content: 'Bitcoin Designathon 2022' },

      { hid: 'description', name: 'description', content:"Let's get creative with Bitcoin. October 12 to 23." },
      { name: 'description', content: "Let's get creative with Bitcoin. October 12 to 23." },
      { property: 'og:description', content: "Let's get creative with Bitcoin. October 12 to 23." },

      { property: 'og:url', content: 'https://event.bitcoin.design' },
      { property: 'og:site_name', content: 'Bitcoin Designathon 2022' },
      { property: 'og:image', content: '/preview.jpg' },

      { name: 'twitter:card', content: 'summary' },
      { property: 'twitter:image', content: '/preview.jpg' },
      { property: 'twitter:title', content: 'Bitcoin Designathon 2022' },
      { name: 'twitter:site', content: '@bitcoin_design' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#f2a900', href: '/assets/safari-pinned-tab.svg' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/animations',
    '~assets/css/variables',
    '~assets/css/mixins',
    '~assets/css/fonts',
    '~assets/css/normalize',
    '~assets/css/base'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  svg: {
      vueSvgLoader: {
        // vue-svg-loader options
      },
      svgSpriteLoader: {
          // svg-sprite-loader options
      },
      fileLoader: {
          // file-loader options
      }
  }
}
