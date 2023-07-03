<template>
  <div class="start">
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref, } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Start',
  setup() {
    console.log('setup...')
    let router = useRouter()

    let name = ref('John')
    let num = ref(10)
    let obj = ref({
      msg: 'start',
    })

    onMounted(() => {
      console.log('onMounted...')
      console.log('发请求')
      console.log('初始化')
    })

    onUnmounted(() => {
      console.log('卸载的时候操作')
    })

    let start = () => {
      router.push({
        // path: '/home',
        // query: {
        //   name: name.value,
        //   num: num.value,
        //   obj: JSON.stringify(obj),
        // },
        name: 'Home',
        params: {
          name: name.value,
          num: num.value,
          obj: JSON.stringify(obj),
        },
      })
    }
    
    return {
      start,
    }
  }
})
</script>
