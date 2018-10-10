<template>
  <div id="dashboard"
       class="flex-fc-hs-vs">
    <CHeader></CHeader>
    <div class="body flex-fr-hs-vs">
      <CSideMenu></CSideMenu>
      <div class="page-wrapper"
           ref="pageWrapper">
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>

    <CFooter></CFooter>
    <SlotGlobal></SlotGlobal>
  </div>
</template>

<script>
import CHeader from '@/components/CHeader'
import CFooter from '@/components/CFooter'
import CSideMenu from '@/components/CSideMenu'
import SlotGlobal from '@/components/slot/Global'
export default {
  name: 'dashboard',
  components: {
    CHeader,
    CFooter,
    CSideMenu,
    SlotGlobal
  },
  metaInfo() {
    return {
      title: `${this.$route.meta.title || '未命名页面'}-呼叫中心管理系统`
    }
  },
  data() {
    return {
      pageScroll: null
    }
  },
  created() {
    this.$eventBus.on('transLogo', data => {
      this.$Message.info({
        content: data
      })
      this.$sysSound.play('message')
    })
  },
  mounted() {
    setTimeout(() => {
      this.pageScroll = this.$createScroll(this.$refs.pageWrapper, {
        mouseWheel: {
          speed: 20,
          easeTime: 1000
        }
      })
    }, 60)
  }
}
</script>

<style lang="stylus">
#dashboard
  width 100%
  height 100%
  .body
    position relative
    flex 1 1 auto
    width 100%

  .page-wrapper
    position absolute
    width 100%
    height 100%
    padding-left 200px
    overflow hidden
</style>
