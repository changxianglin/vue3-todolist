<template>
  <div>
    <nav-header @add="add"></nav-header>
    <nav-main :list="list" @del="del"></nav-main>
    <nav-footer :list="list" @clear="clear"></nav-footer>
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
      let flag = true
      list.value.map((item) => {
        if(item.title === value.value) {
          flag = false
          alert('exist task')
        }
      })

      if(flag) {
        store.commit('addTodos', {
        title: value.value,
        complete: false,
      })
      }
    }

    const del = (val) => {
      console.log(val)
      store.commit('delTodo', val)
    }

    const clear = (val) => {
      store.commit('clearn', val)
    }

    return {
      add, 
      del,
      clear,
      value,
      list,
    }
  }
})
</script>

<style scoped lang="scss">

</style>