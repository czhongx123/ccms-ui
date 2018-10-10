# 编码

::: danger
本页文档正在撰写中，请勿参考。
:::

## 数据接口定义

`/src/api/`

对于一个复杂系统的接口请求的设计，私以为分为两个导向。

* 工具导向

把XMLHttpRequest或已有的http请求库根据需要请求方法和出入参需求，再次进行封装并暴露请求方法。

少数的接口预先定义好工具也许是个好方法，但是随着接口需求增多，定制工具方法会和业务逻辑耦合越来越紧。而且对于一个成熟的http请求库来说，二次封装很难超越原库本身，例如`axios`本身即支持全局设置和本地设置，封装并没有在本地使用时随手配置更简单灵活。

* 业务导向

通过分析业务数据接口需求，把数据请求业务化命名，并结合http请求库封装为业务方法。

API方法一旦与业务逻辑代码解耦：

* 可以根据业务粒度任意拆分，组合js文件。

* 可以更加清晰快速的了解模块所使用的API，并在团队间快速响应。

* 多人协作时，写接口方法和写业务逻辑可以独立进行，并且业务方法更接近于接口文档。

* 因为http请求工具被封装在业务方法内部，所以模块所需的业务数据请求方法不需要主框架提供任何工具支持和约定限制。

`/src/api/index.js`文件导出API方法集合。会通过`Vue.prototype.$api[moduleConfig.name] = api`方法挂载到Vue原型对象上。当我们的Vue程序实例化后，便可在任意位置通过`this.$api.moduleName.anyMethod()`去调用。

例如一个组件要获取用户信息，在组件中可以这样写

``` javascript
this.$api.getUserInfo(userId).then(({data}) => {
  console.log(data)
}).catch() // 业务方法应天生支持异步操作
```

是不是更加直观？

## 局部组件

`/src/components/`

本目录仅用来放置局部导入其他组件使用的组件，比如一个公用的一个弹窗组件，组件自身仅是页面组件的一部分。

## 页面布局

目前页面有两种布局：

1. 控制台布局`Dashboard`。

包含头部，侧边菜单，页面容器，大部分业务组件都应该设置为此布局。

```javascript
export default {
  name: 'home',
  layout: 'dashboard'
}
```

2. 默认布局`Default`

如果组件中不设置`layout`属性，则会通过默认布局出口，例如：登录页面，注册页面等非控制台页面。

## 页面组件

`/src/pages/`

页面组件是直接导入路由定义的组件，肩负着匹配路由显示页面的使命。

## 路由定义

`/src/router/`

模块的路由配置导出文件`index.js`及其拆分文件都在此目录中。

### meta

每个路由定义必须配置`meta`属性，此属性给了路由页面更大的配置空间和可能性。

* title

`类型：字符串`

页面标题。

会通过出口组件的`vue-meta`配置进行读取

```javascript
export default {
  name: 'home',
  metaInfo () {
    return {
      title: this.$route.meta.title
    }
  }
}
```

* notRecord

`类型：布尔`

当前路由是否记录在框架的页面标签中，设置为：`true`时将不会记录。

## 状态管理

`/src/store/`

除组件内部自维护的状态和数据外，业务模块的所有跨组件状态都应放在[Vuex](https://vuex.vuejs.org/zh/)进行集中管理，在组件内部通过`computed`和`mapState`进行状态映射。

同路由配置一样，我们需要一个单独的文件`storeModule.js`去导出模块的状态仓库。

```javascript
export default {
  namespaced: true, // 必须开启命名空间
  state: {
    list: []
  },
  mutations: {
    changeList(state, payload) {
      state.list.push(payload)
    }
  }
}
```

store模块文件会被导入store目录的`index.js`文件，`index.js`又会被导入`main.js`。

有必要在state.module的mutations中定义足够多的接口来其他模块进行直接通信。

例子：一个模块的可弹出层，具有打开和关闭的方法。

```javascript
export default {
  namespaced: true, // 模块必须开启命名空间
  state: {
    open: false
  },
  mutations: {
    /**
     * 开启来电弹屏
     */
    open (state) {
      state.open = true
    },
    /**
     * 关闭来电弹屏
     */
    close (state) {
      state.open = false
    }
  }
}

```

那么，在任何需要的地方，我们无需关心目标组件的位置关系，可以直接通过模块开放接口去控制它。

```javascript
store.commit('namespaced/close')
```

当然，实际业务要同时操作的状态远比例子复杂，但是不用怕，我们通过`mutations`和异步的`actions`配合合理的代码拆分，依然能够很容易的维护复杂业务的开放接口。