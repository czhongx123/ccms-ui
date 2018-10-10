<template>
  <div id="default">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'default',
  metaInfo() {
    return {
      title: `${this.$route.meta.title || '未命名页面'}-呼叫中心管理系统`
    }
  }
}
</script>
<style lang="stylus">
#default
  width 100%
  height 100%
</style>
