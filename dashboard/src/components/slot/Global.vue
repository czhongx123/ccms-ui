<template>
  <div class="slot-global">
    <component v-for="(name, index) in components"
               :key="index"
               :is="name"></component>
  </div>
</template>
<script>
export default {
  name: 'slotGlobal',
  data() {
    return {
      components: []
    }
  },
  watch: {
    '$store.state.frameSlot.global'(n) {
      if (n.length > 0) {
        this.components = n
      }
    }
  }
}
</script>
