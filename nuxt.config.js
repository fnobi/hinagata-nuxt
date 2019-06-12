import { HEAD, BASE_PATH } from './const'

export default {
  mode: 'spa',
  head: HEAD,
  plugins: [],
  modules: [
    '@nuxtjs/axios',
    ['@nuxtjs/google-analytics', {
      id: 'UA-XXXXXXXXX-X'
    }]
  ],
  css: ['@/assets/scss/common.scss'],
  router: {
    base: BASE_PATH
  },
  axios: {
    baseURL: BASE_PATH
  },
  generate: {
    dir: `../public${BASE_PATH}`
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
