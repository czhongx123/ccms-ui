<template>
  <div id="header"
       class="flex-fr-hb-vc">
    <div class="left">
      <CLogo></CLogo>
    </div>
    <div class="right flex-fr-he-vc">
      <div class="header-menu-item flex-fr-hs-vc">
        <Icon type="md-notifications-outline"
              :size="20" />通知</div>
      <div class="header-menu-item flex-fr-hs-vc">
        <Avatar icon="ios-person"
                size="large" />王二狗</div>
      <div class="header-menu-item flex-fr-hs-vc">
        <Icon type="md-settings"
              :size="20" />设置</div>
      <div class="header-menu-item flex-fr-hs-vc"
           @click="logout">
        <Icon type="md-log-out"
              :size="20" />退出</div>
    </div>
  </div>
</template>
<script>
import CLogo from './CLogo'
export default {
  name: 'c-header',
  components: {
    CLogo
  },
  methods: {
    logout() {
      this.$store.commit('dashboard/cleanUserData')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="stylus">
#header
  height 60px
  width 100%
  padding 0 15px
  background $color-main
  color #fff
  user-select none

  .header-menu-item
    margin 10px
    font-size 14px
    cursor pointer

    .ivu-avatar
      background none
</style>
