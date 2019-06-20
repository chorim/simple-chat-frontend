require('dotenv').config()
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
    transpile: ['bootstrap-vue'],
    vendor: ['socket.io-client']
  },
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'cookie-universal-nuxt'
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
  plugins: [
    { src: '~/plugins/socket.io.js', ssr: false},
    // '~/plugins/socket.io.js',
    '~/plugins/axios.js'
  ],
  env: {
    SOCKET_HOST_URL: process.env.SOCKET_HOST_URL || 'http://localhost:9941'
  },
  axios: {
    baseURL: process.env.API_HOST_URL || 'http://localhost:3000/v1'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/auth/login', method: 'post', propertyName: 'token'},
          user: {url: '/users/me', method: 'get', propertyName: 'user'},
          logout: false
        }
      }
    }
  }

}

