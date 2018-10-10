import _modules from './modules'
import _envConst from './env-const'
import error from './error'
const envConst = _envConst[process.env.VUE_APP_MODE]
const modules = _modules[process.env.VUE_APP_MODE]

export { envConst, modules, error }
