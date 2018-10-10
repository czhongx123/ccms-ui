// 创建script
import { error } from '@/config/'
import sysSound from '@/plugins/sys-sound'
export default (extensionName, src) =>
  new Promise((resolve, reject) => {
    let script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
    script.onload = () => {
      resolve(window[extensionName].default)
    }
    script.onerror = () => {
      sysSound.play('failed')
      reject({
        code: '003',
        message: error['003']
      })
    }
  })
