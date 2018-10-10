import { modules } from '@/config/index'
import extensionLoader from '@/plugins/module-loader/index'
import iView from 'iview'
export default () => {
  console.log('开始加载自动挂载模块')
  for (let name in modules) {
    if (modules[name].autoLoad) {
      console.log('加载自动挂载模块：' + name)
      extensionLoader(name)
        .then(() => {
          console.log('模块' + name + '已自动加载。')
        })
        .catch(error => {
          iView.Modal.error({
            title: `错误${error.code}`,
            content: error.message
          })
        })
    }
  }
}
