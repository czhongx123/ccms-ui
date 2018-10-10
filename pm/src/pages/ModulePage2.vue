<template>
  <div class="page-wrapper">
    <Card class="demo-box">
      <p slot="title">子路由</p>
      <p v-for="(item, index) of list"
         :key="index">{{item}}</p>
    </Card>
  </div>
</template>
<script>
export default {
  name: 'ModulePage2',
  computed: {
    list() {
      return this.$store.state.ex1.list
    }
  }
}
</script>
<style lang="stylus">
.page-wrapper
  .demo-box
    text-align center
    width 350px
</style>
