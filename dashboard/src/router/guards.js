import iView from 'iview'
import extensionLoader from '@/plugins/module-loader/index'
import { error } from '@/config/index'
import checkExtensionIsExist from '@/plugins/module-loader/check-module-is-exist'
const guards = router => {
  router.beforeEach((to, from, next) => {
    let moduleName = to.path.match(/^\/([^/]+)?/)[1]
    console.log('路由to：', to, moduleName)
    if (to.matched.length > 0) {
      next()
    } else {
      // 如果没有匹配到路由结果，判断扩展是否加载
      let extensionIsExist = checkExtensionIsExist(moduleName)
      if (extensionIsExist) {
        // 模块已加载，但是路由不存在
        iView.Modal.error({
          title: '错误002',
          content: error['002']
        })
      } else {
        extensionLoader(moduleName)
          .then(() => {
            router.push(to)
          })
          .catch(error => {
            iView.Modal.error({
              title: `错误${error.code}`,
              content: error.message
            })
          })
      }
    }
  })
}

export default guards
