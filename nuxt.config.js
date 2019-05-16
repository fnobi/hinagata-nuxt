import { HEAD } from './const'

export default {
  mode: 'spa',
  head: HEAD,
  plugins: [],
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  css: ['@/assets/scss/common.scss'],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: '/'
  },
  build: {
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
