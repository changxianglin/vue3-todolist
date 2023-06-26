<template>
  <div>
    <!-- <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer> -->
    <!-- {{ num1 }} --- {{ num2 }}
    两个数的和 {{ addNum }}
    <div>
      <button @click="add">add</button>
    </div> -->
    <!-- {{ list }} -->
    <button @click="goto">跳转路由</button>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, computed } from 'vue';
import NavHeader from '../components/navHeader/NavHeader.vue'
import NavMain from '../components/navMain/NavMain.vue'
import NavFooter from '../components/navFooter/NavFooter.vue'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

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
    const router = useRouter()
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    // let num = ref(10)
    // let name = ref('zhangsan')
    // let arr = ref(['a', 'b', 'c', 'd'])

    let data = reactive({
      name: 'zhangsan',
      age: 20,
      obj: {
        price: 10,
      }
    })

    let num1 = ref(10)
    let num2 = ref(20)
    let addNum = computed(() => {
      return num1.value + num2.value
    })

    let add = () => {
      num1.value++
      num2.value++
    }

    let goto = () => {
      router.push({
        path: '/about'
      })
    }

    return {
      // num, 
      // name,
      // arr
      // data
      ...toRefs(data),
      num1,
      num2,
      addNum,
      add,
      list, 
      goto,
    }
  }
})
</script>

<style scoped lang="scss">

</style>