import { modules, error } from '@/config/index'
import checkDependency from './check-dependency'
import createScriptElement from './create-script-element'
import register from './register'
/**
 * 导出方法返回Promise
 */
export default name =>
  new Promise((resolve, reject) => {
    let src = modules[name] ? modules[name].src : false
    if (src) {
      createScriptElement(name, src)
        .then(extensionObj => {
          // 检查模块依赖
          let checkResult = checkDependency(extensionObj.dependency)
          if (checkResult.code === '000') {
            register.api(extensionObj.name, extensionObj.api)
            register.store(extensionObj.name, extensionObj.store)
            register.router(extensionObj.routes)
            register.component(extensionObj.components)
            register.sideMenu(extensionObj.routes)
            resolve()
          } else {
            window[name] = null
            reject(checkResult)
          }
        })
        .catch(error => {
          reject(error)
        })
    } else {
      reject({
        code: '001',
        message: error['001']
      })
    }
  })
