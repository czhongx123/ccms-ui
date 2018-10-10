import axios from 'axios'
import iView from 'iview'
import dashboard from './dashboard'
import sysSound from '@/plugins/sys-sound'
axios.defaults.withCredentials = true
// axios.defaults.timeout = 10000
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code !== '0') {
      iView.Message.error({
        content: response.data.info,
        duration: 10,
        closable: true
      })
      sysSound.play('failed')
    }
    return response
  },
  error => {
    if (error.response) {
      console.log('错误响应状态码', error.response.status)
      switch (error.response.status) {
        case 404:
          iView.Message.error({
            content: '请求出错，请联系管理员。',
            duration: 10,
            closable: true
          })
          break
        case 500:
          iView.Message.error({
            content: '服务器开小差，请稍后再试。',
            duration: 10,
            closable: true
          })
          break
        default:
      }
    }
    return Promise.reject(error)
  }
)

export default {
  dashboard
}
