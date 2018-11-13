const URL = 'http://example.com/';
const TITLE = 'hinagata-nuxt';
const DESCRIPTION = 'Nuxt.js project';
const SHARE_IMAGE_URL = `${URL}ogp.png`;

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION },
      { property: 'og:url', content: URL },
      { property: 'og:image', content: SHARE_IMAGE_URL },
      { property: 'og:title', content: TITLE },
      { property: 'og:description', content: DESCRIPTION },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:image', content: SHARE_IMAGE_URL },
      { property: 'twitter:title', content: TITLE },
      { property: 'twitter:description', content: DESCRIPTION }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: URL }
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
