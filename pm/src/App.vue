<template>
  <div id="app">
    <router-view></router-view>
    <SlotAlert></SlotAlert>
  </div>
</template>

<script>
import moduleConfig from '@root/package.json'
import SlotAlert from '@/components/Alert'
export default {
  name: 'App',
  metaInfo() {
    return {
      title: this.$route.meta.title
    }
  },
  components: {
    SlotAlert
  },
  beforeCreate() {
    // 启动工程后自动导航到模块首页
    if (this.$route.path === '/') {
      this.$router.push(`/${moduleConfig.name}`)
    }
  }
}
</script>
<style lang="stylus">
html, body, #app
  height 100%
</style>
