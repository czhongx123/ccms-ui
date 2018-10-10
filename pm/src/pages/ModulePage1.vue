<template>
  <div class="page-wrapper">
    <ModuleComponent></ModuleComponent>
  </div>
</template>
<script>
import ModuleComponent from '@/components/ModuleComponent'
import { mapState } from 'vuex'
export default {
  name: 'ModulePage1',
  components: {
    ModuleComponent
  },
  computed: {
    ...mapState('ex1', {
      list: state => state.list
    })
  }
}
</script>

