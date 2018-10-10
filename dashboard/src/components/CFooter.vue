<template>
  <div id="footer"
       class="flex-fr-hb-vc">
    <div class="copyright">2018 ©️ 方正国际 豫ICP备231222</div>
    <div class="event-tips flex-fr-hs-vc">
      <Icon type="md-alert"
            :size="15" />{{message}}</div>
  </div>
</template>
<script>
export default {
  name: 'c-footer',
  data() {
    return {}
  },
  computed: {
    message() {
      return this.$store.state.footer.eventTips
    }
  }
}
</script>

<style lang="stylus">
#footer
  height 30px
  width 100%
  padding 0 15px
  background $color-sub-light
  color #fff
</style>
