<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="backHome">回到首页</button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'About',
  setup() {
    let router = useRouter()

    let backHome = () => {
      router.back()
    }

    return {
      backHome,
    }
  }
})
</script>
