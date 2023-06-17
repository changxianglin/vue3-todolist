<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import NavHeader from '../components/navHeader/NavHeader.vue'
import NavMain from '../components/navMain/NavMain.vue'
import NavFooter from '../components/navFooter/NavFooter.vue'

export default defineComponent({
  name: 'Home',
  props: {

  }, 
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  setup(props, ctx) {
    let num = ref(10)
    let name = ref('zhangsan')
    let arr = ref(['a', 'b', 'c', 'd'])

    return {
      num, 
      name,
      arr
    }
  }
})
</script>

<style scoped lang="scss">

</style>