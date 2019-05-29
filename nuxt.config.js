const path = require('path')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'simple-chat-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    // https://github.com/bootstrap-vue/bootstrap-vue/issues/3397
    transpile: ['bootstrap-vue']
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      'assets/scss/app.scss',
    ]
  },
  // webstorm
  resolve: {
    extensions: ['.js', '.json', '.vue', '.ts'],
    root: path.resolve(__dirname),
    alias: {
      '@': path.resolve(__dirname),
      '~': path.resolve(__dirname),
    },
  },
  // bootstrapVue: {
  //   bootstrapCSS: false, // Or `css: false`
  //   bootstrapVueCSS: false // Or `bvCSS: false`
  // },

}

