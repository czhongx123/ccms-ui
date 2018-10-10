<template>
  <div class="pm-alert">
    <Modal v-model="alertShow">
      {{message}} {{alertTip}}
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'pmAlert',
  frameSlot: 'global',
  data() {
    return {
      message: '局部组件的内容'
    }
  },
  computed: {
    alertShow: {
      get() {
        let r = this.$store ? this.$store.state.pm.alertShow : false
        return r
      },
      set(v) {
        this.$store.commit('pm/changeAlertShow', v)
      }
    },
    alertTip() {
      let r = this.$store ? this.$store.state.pm.alertTip : ''
      return r
    }
  }
}
</script>
