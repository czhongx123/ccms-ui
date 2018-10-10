import Vue from 'vue'

// 权限指令：v-permission
Vue.directive('permission', function(el, binding, vnode) {
  console.log(el, binding.modifiers, vnode)
})

// 权限指令：v-role
Vue.directive('role', function(el, binding, vnode) {
  console.log(el, binding.modifiers, vnode)
})
