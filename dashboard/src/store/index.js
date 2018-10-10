import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from './dashboard'
import frameSlot from './frameSlot'
import footer from './footer'
import menus from './menus'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    dashboard,
    frameSlot,
    footer,
    menus
  }
  // plugins: [eventDispatch]
})
export default store
