import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import store from './store/'
import './plugins/jquery'
import './plugins/iview'
import './plugins/axios'
import './plugins/vue-meta'
import './plugins/better-scroll'
import './plugins/lodash'
import api from './api/'
import autoLoadExtension from './assets/js/auto-load-module'
import eventBus from '@/plugins/event-bus'
import '@root/public/theme/image/iconfont.js'
import sysSound from '@/plugins/sys-sound'
import '@/plugins/shiro'
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$sysSound = sysSound
Vue.prototype.$eventBus = eventBus
autoLoadExtension()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
