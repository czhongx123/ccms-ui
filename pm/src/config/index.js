// 导入当前环境常量
import env from './env'

// 导入npm包配置文件，以便从中获取信息。
const npmPackage = require('../../package.json')
const name = npmPackage.name

// 导入外置依赖声明
const externals = require('./externals')

// 导出模块config，在其它地方使用。
export { name, env, externals }
