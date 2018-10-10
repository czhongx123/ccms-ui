<template>
  <div class="side-menu-wrapper"
       ref="sideMenuWrapper">
    <Menu class="side-menu"
          theme="dark"
          :open-names="['1']"
          :width="'200px'">
      <Submenu :name="menu.path"
               v-for="menu in sideMenusData"
               :key="menu.path">
        <template slot="title">
          <Icon type="ios-paper" />
          {{menu.meta.title}}
        </template>
        <MenuItem :name="item.path"
                  v-for="item in menu.children"
                  :to="{path: menu.path + '/' + item.path}"
                  :key="menu.path + '/' + item.path">{{item.meta.title}}</MenuItem>
      </Submenu>
    </Menu>
  </div>

</template>
<script>
export default {
  name: 'side-menu',
  data() {
    return {
      scroll: null
    }
  },
  computed: {
    sideMenusData() {
      if (this.scroll) {
        this.scroll.refresh()
      }
      console.log('重新计算侧边菜单')
      return this.$store.state.menus.sideMenusData
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = this.$createScroll(this.$refs.sideMenuWrapper, {
        mouseWheel: {
          speed: 1,
          easeTime: 1000
        }
      })
    })
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.side-menu-wrapper
  position absolute
  height 100%
  background red
  overflow hidden
  background $color-sub

  .side-menu
    background none

    .ivu-menu-submenu
      >>>.ivu-menu-item-active
        background $color-main !important

      >>>.ivu-menu-submenu-title:hover
        background $color-sub-light

    .ivu-menu-opened
      background $color-sub-dark

      >>>.ivu-menu-submenu-title
        background $color-sub-light
</style>
