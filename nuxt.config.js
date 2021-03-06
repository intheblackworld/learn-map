module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'learn-map',
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

  css: [
    { src: '~assets/main.scss', lang: 'scss' },
    'element-ui/lib/theme-chalk/index.css'
  ],
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },

  vender: [
    'element-ui'
  ],

  cache: true,

  babel: {
    "plugins": [
      ["component", [{
          "libraryName": "element-ui",
          "styleLibraryName": "theme-default"
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]
    ],
    comments: true
  },
  plugins: [
    { src: '~plugins/element-ui', ssr: true }
  ],



}