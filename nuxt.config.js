module.exports = {
  mode: 'universal',
  modules: [
    ['@nuxtjs/pwa']
  ],
  workbox: {
    importScripts: ['evil-sw.js']
  },
  head: {
    title: 'evilnews',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'very minimal dump hackernews reader that you should not to use it, at least for now' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Freckle+Face' }
    ]
  },
  css: [
    '~/assets/bulma.scss'
  ],
  loading: { color: '#666' },
  build: {
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['nuxt-buefy', { css: false }]
  ]
}
