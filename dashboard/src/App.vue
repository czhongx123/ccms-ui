<template>
  <div id="app"
       class="flex-fc-hs-vs">
    <component :is="layoutName"></component>
  </div>
</template>

<script>
import CDefault from '@/layout/CDefault'
import CDashboard from '@/layout/CDashboard'
export default {
  name: 'app',
  components: {
    CDefault,
    CDashboard
  },
  data() {
    return {
      layoutName: ''
    }
  },
  watch: {
    // 监听懒加载的路由对象，选择视图，不可用computed方法，因为懒加载是异步的。
    $route: {
      handler: function() {
        if (this.$route.path === '/login') {
          this.layoutName = 'CDefault'
        } else {
          this.layoutName = 'CDashboard'
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus">
@import '~@/assets/style/display'

html, body
  height 100%

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #333
  height 100%
  .icon
    width 1em
    height 1em
    vertical-align -0.15em
    fill currentColor
    overflow hidden
</style>
