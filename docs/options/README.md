# 模块配置

::: danger
本页文档正在撰写中，请勿参考。
:::

可配置项通过`/src/config.js`文件进行配置。

## 基本信息

基本信息，用来描述此工程。

### name

类型：`String`

vue 工程的名称。

模块名称遵从 npm 包命名规范，单词小写，多单词使用`-`连接。

### version

类型：`String`

vue 工程的版本号，版本号命名应遵从[语义化版本规范](https://semver.org/lang/zh-CN/)。

### author

类型：`name <email>`

vue 远程模块作者，暂时无用。

## 外部依赖

`/src/externals.js`

框架开发人员得到模块开发人员的外部依赖清单后，需要在此文件中手动添加外部依赖，这些外部依赖在主框架打包时会被单独打包，以便更好的缓存。

```javascript
import jquery from 'jquery'
import axios from 'axios'
window.$ = jquery
window.axios = axios
```

同样，在框架中要用的第三方包也可以添加到本文件中。

这个文件会在`/src/main.js`中首先被导入，所以在我们的项目文件中无需导入，可以直接使用添加在 window 上的全局变量。

## 构建模式

构建模式是一个非常有用的配置，此处的构建模式不完全等于[vue-cli@3 的模式](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E6%A8%A1%E5%BC%8F)，我们只是通过 vue-cli@3 的模式机制，动态赋值`VUE_APP_MODE`常量，并在环境变量中根据`VUE_APP_MODE`的值动态切换变量对象。

`.env.test42`文件为例：

```bash
NODE_ENV=production # 以生产配置构建
VUE_APP_MODE=test42 # 设置VUE_APP_MODE值
```

这样做的目的也是为了我们能够集中的管理环境变量。见下文。

## 环境变量

环境变量记录着整个模块用到的各种依环境不同而不同的常量。在项目任意地方导入后可以直接使用常量，避免了手动或通过 CI 另外配置替换环境变量的麻烦事儿。

```javascript
// 项目中中所使用的常量
const _env = {
  development: {
    // 开发环境
    API_BASE: 'http://localhost:8083'
  },
  production: {
    // 正式生产环境
    API_BASE: 'http://qingjin.me'
  },
  test42: {
    // 42测试环境
    API_BASE: 'http://test42.com'
  }
}
const env = _env[process.env.VUE_APP_MODE] // 通过构建模式来动态获取环境变量
```

使用：

```javascript
import { env } from '@/config'
axios.get(env.API_BASE + '/something')
```

希望根据不同运行环境进行切换的变量一定要拥有相同的`key`值。

## 远程模块库

框架开发者从远程模块开发者处得到远程模块的部署地址列表，按不同的环境配置在`_moduleLibs`对象中。

key值为模块名称，value为部署地址。

```javascript
// 远程模块列表
const _moduleLibs = {
  development: {
    clkm: 'http://qingjin.me/clkm.umd.js'
  },
  production: {
    clkm: 'http://qingjin.me/clkm.umd.js'
  },
  test42: {
    clkm: 'http://test42.com/clkm.umd.js'
  }
}
const moduleLibs = _moduleLibs[process.env.VUE_APP_MODE]
```

`moduleLibs`对象会被导入路由配置文件，在获取远程模块时通过`route.path`动态选取模块地址。