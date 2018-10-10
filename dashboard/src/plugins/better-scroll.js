import Vue from 'vue'
import BScroll from 'better-scroll'
Vue.prototype.$createScroll = (el, options) => new BScroll(el, options)
