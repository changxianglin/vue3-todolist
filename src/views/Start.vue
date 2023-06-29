<template>
  <div class="start">
    <button @click="start">开始任务</button>
  </div>
</template>

<script>
import { defineComponent, ref, } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Start',
  setup() {
    let router = useRouter()

    let name = ref('John')
    let num = ref(10)
    let obj = ref({
      msg: 'start',
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
