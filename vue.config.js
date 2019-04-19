const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  'axios': 'axios',
  'paypal-checkout': 'paypal'
}
const CompressionPlugin = require('compression-webpack-plugin')
const cdn = {
  dev: {
    css: [
    ],
    js: [
    ]
  },
  build: {
    css: [
      'https://cdn.jsdelivr.net/npm/swiper@2.7.6/dist/idangerous.swiper.css'
    ],
    js: [
      // vue
      'https://cdn.jsdelivr.net/npm/vue@2.6.9/dist/vue.min.js',
      // vue-router
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.2/dist/vue-router.min.js',
      // vuex
      'https://cdn.jsdelivr.net/npm/vuex@3.1.0/dist/vuex.min.js',
      // axios
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      // mdui
      'https://cdn.jsdelivr.net/npm/mdui@0.4.2/dist/js/mdui.min.js',
      // paypal
      'https://cdn.jsdelivr.net/npm/paypal-checkout@4.0.263/dist/checkout.lib.js',
      // swiper
      // 'https://cdn.jsdelivr.net/npm/swiper@4.5.0/dist/js/swiper.min.js'
      'https://cdn.jsdelivr.net/npm/swiper@2.7.6/dist/idangerous.swiper.min.js'
    ]
  },
}
const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: process.env.BASE_URL,
  lintOnSave: true,
  productionSourceMap: true,
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true
  },
  parallel: require('os').cpus().length > 1,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      if (IS_PROD) {
        args[0].cdn = cdn.build
      } else {
        args[0].cdn = cdn.dev
      }
      return args
    })
  },
  configureWebpack: config => {
    if (IS_PROD) {
      config.externals = externals
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
          threshold: 10240,
          minRatio: 0.8,
          cache: true
        })
      )
    }
  }
}
