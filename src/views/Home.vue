<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list"></nav-main>
    <nav-footer :list="list"></nav-footer>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, computed } from 'vue';
import NavHeader from '../components/navHeader/NavHeader.vue'
import NavMain from '../components/navMain/NavMain.vue'
import NavFooter from '../components/navFooter/NavFooter.vue'
import { useStore } from 'vuex';
import { useRouter, useRoute, } from 'vue-router'

export default defineComponent({
  name: 'Home',
  props: {

  }, 
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },

  setup() {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let value = ref('')
    const add = (val) => {
      value.value = val
    }

    return {
      add, 
      value,
      list,
    }
  }
})
</script>

<style scoped lang="scss">

</style>