const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const externals = require('./src/config/externals')
module.exports = {
  baseUrl: '/',
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        path: __dirname
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@root': path.join(__dirname)
      }
    },
    plugins: [new CopyWebpackPlugin([{ from: 'public' }])],
    // 外置依赖库无需打包，减小打包体积。
    externals: process.env.NODE_ENV === 'production' ? externals : {}
  }
}
