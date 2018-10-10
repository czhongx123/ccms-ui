import Vue from 'vue'
import Router from 'vue-router'
import guards from './guards'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: () => import('@/pages/CHome.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '请登录',
        noAuth: true
      },
      component: () => import('@/pages/CLogin.vue')
    }
  ]
})
guards(router)
router.onError(error => {
  console.log('路由时出错:', error)
})
export default router
