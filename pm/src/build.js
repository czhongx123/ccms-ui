/**
 * 打包的入口文件，不可修改。
 */
import { name, dependencies } from '@root/package.json'
import store from '@/store/storeModule'
import routes from '@/router/routes'
import api from '@/api'
import { externals } from '@/config/index'
import { env } from '@/config/index'
import Ex1Alert from '@/components/Alert'
/**
 * 获取内部依赖。
 */
const getInternalDependencies = () => {
  let internals = { ...dependencies }
  for (let exterKey in externals) {
    if (internals[exterKey]) {
      delete internals[exterKey]
    }
  }
  return internals
}

let internals = getInternalDependencies()

export default {
  name,
  api,
  env,
  store,
  routes,
  components: {
    Ex1Alert
  },
  dependency: {
    external: externals,
    internal: internals
  }
}
