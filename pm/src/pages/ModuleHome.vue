<!-- 模块主入口，将由web pack打包，承载本模块的所有数据 -->
<template>
  <div id="ex1">
    <router-view></router-view>
  </div>
</template>
<script>
import '@/assets/font/iconfont'
export default {
  name: 'ex1',
  layout: 'dashboard'
}
</script>

<style lang="stylus">
#ex1
  background #eee
  height 100%
  overflow auto

  .icon
    width 1em
    height 1em
    vertical-align -0.15em
    fill currentColor
    overflow hidden

  .page-wrapper
    display flex
    padding 10px
    width 100%
</style>
