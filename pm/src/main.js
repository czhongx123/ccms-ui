// 开发服务的入口文件，只在开发阶段有用，与打包远程模块无关。
import Vue from 'vue'
import App from './App'
import Mate from 'vue-meta'

// 插件
import '@/plugins/iview'
import { name } from '@/config/index'

// 仅导出开发环境需要的路由,状态管理和API定义
import router from '@/router/'
import store from '@/store/'

// 导入api定义
import api from '@/api'

import { env } from '@/config/index'
Vue.use(Mate)

// api以模块为对象添加到vue原型。
Vue.prototype.$api = {}
Vue.prototype.$api[name] = api
Vue.prototype.$env = {}
Vue.prototype.$env[name] = env
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
