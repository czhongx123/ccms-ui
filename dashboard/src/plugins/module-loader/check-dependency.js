// 检查依赖
import { error } from '@/config/index'
const packageJson = require('@root/package.json')
export default dependencies => {
  for (let key in dependencies) {
    for (let k in dependencies[key]) {
      // dashboard模块是主框架自身，所以不需要匹配依赖。
      if (!packageJson.dependencies.hasOwnProperty(k) && k !== 'dashboard') {
        if (key === 'externals') {
          return {
            code: '004',
            message: error['004'] + `(${k})`
          }
        } else {
          return {
            code: '005',
            message: error['005'] + `(${k})`
          }
        }
      }
    }
  }
  return {
    code: '000',
    message: ''
  }
}
