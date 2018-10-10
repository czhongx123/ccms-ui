const path = require('path')
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@root': path.join(__dirname)
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        path: __dirname
      },
      stylus: {
        // 导入全局颜色主题变量
        import: [path.join(__dirname, `public/theme/style/color.styl`)]
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.18.238.202:9000/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
    // host:'dev.andesk.cn'
  }
}
