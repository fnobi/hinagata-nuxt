const URL = 'https://hinagata-nuxt.example.com/';
const TITLE = 'hinagata-nuxt';
const DESCRIPTION = 'Nuxt.js project';
const SHARE_IMAGE_URL = `${URL}ogp.png`;

module.exports = {
  URL,
  TITLE,
  DESCRIPTION,
  SHARE_IMAGE_URL,
  HEAD: {
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
      { property: 'twitter:description', content: DESCRIPTION },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: URL },
    ],
  },
};
