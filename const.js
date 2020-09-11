const TITLE = 'hinagata-nuxt'
const DESCRIPTION = 'Nuxt.js project'
const KEYWORDS = 'nuxt, javascript'
const BASE_PATH = '/'
const URL = `${process.env.SITE_ORIGIN || 'https://example.com'}${BASE_PATH}`
const SHARE_IMAGE_URL = `${URL}ogp.png`

module.exports = {
  URL,
  TITLE,
  DESCRIPTION,
  SHARE_IMAGE_URL,
  BASE_PATH,
  HEAD: {
    title: TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: DESCRIPTION },
      { name: 'keywords', content: KEYWORDS },
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
  }
}
