<template>
  <div class="home">
    <img alt="Vue logo"
         :class="{trans: isActive}"
         src="../assets/logo.png">
    <Button @click="transLogo">反转logo</Button>
    <p>上面是一个可被订阅的事件。</p>
    <Button @click="noOn">无人订阅的事件</Button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    transLogo() {
      this.isActive = !this.isActive
      this.$eventBus.emit('transLogo', '已经反转了logo')
    },
    noOn() {
      this.$eventBus.emit('noOn')
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  display flex
  flex-flow column
  align-items flex-start
.trans
  transform rotateZ(180deg)
</style>
