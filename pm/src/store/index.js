import Vue from 'vue'
import Vuex from 'vuex'
import { name } from '@/config/index'
import storeModule from './storeModule'
Vue.use(Vuex)
// 导出moduleStore，供主框架挂载
export default new Vuex.Store({
  modules: {
    [name]: storeModule
  }
})
