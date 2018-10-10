import Vue from 'vue'
import router from '@/router/index'
// 扩展数据注册器
import store from '@/store/index'
export default {
  // 注册API
  api(extensionName, api) {
    Vue.prototype.$api = {
      ...Vue.prototype.$api,
      [extensionName]: api
    }
  },
  // 注册路由
  router(routes) {
    router.addRoutes(routes)
  },
  // 注册store
  store(extensionName, storeModule) {
    store.registerModule(extensionName, storeModule)
  },
  // 注册非路由组件
  component(components) {
    for (let componentName in components) {
      Vue.component(components[componentName].name, components[componentName])
      store.commit('frameSlot/add', {
        target: components[componentName].frameSlot,
        component: components[componentName].name
      })
    }
  },
  // 注册菜单
  sideMenu(routes) {
    store.commit('menus/addSideMenusData', routes)
  }
}
