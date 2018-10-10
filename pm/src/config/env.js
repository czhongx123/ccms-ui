// 模块部署的服务地址
let i, SERVER_URL
if (
  (i = window.document.currentScript) &&
  (i = i.src.match(/(.+\/)[^/]+\.js$/))
) {
  SERVER_URL = i[1] // eslint-disable-line
}
// 配置模块中所使用的常量
const env = {
  development: {
    // API根地址
    API_BASE: 'http://localhost:8080',
    // 部署服务器地址
    SERVER_URL: SERVER_URL
  },
  test: {
    API_BASE: 'http://172.18.238.202'
  },
  production: {
    API_BASE: 'http://qingjin.me',
    SERVER_URL: SERVER_URL
  }
}
export default env[process.env.VUE_APP_MODE]
