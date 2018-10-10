<template>
  <span class="logo flex-fr-hs-vc" :class="{dark: theme === 'dark'}">
    <svg class="icon"
         aria-hidden="true">
      <use xlink:href="#icon-wangluopinpaishu"></use>
    </svg>
    <span class="title">CCMS</span>
  </span>
</template>
<script>
export default {
  name: 'logo',
  props: ['theme']
}
</script>

<style lang="stylus">
.logo
  color #fff
  .title
    line-height 50px
    font-size 30px
    margin-left 5px
    font-weight 500

  .icon
    font-size 50px
  &.dark
    color $color-font
</style>
