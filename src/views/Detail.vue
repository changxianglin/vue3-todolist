<template>
  <div class="about">
    <h1>This is an detail page</h1>
    <child :msg="msg" @send="send" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import child from '../components/child/child.vue'
export default defineComponent({
  name: 'Detail',
  components: {
    child,
  },
  setup() {
    let msg = ref('这是父组件的数据')
    let send = (val) => {
      console.log(val)
    }

    return {
      msg,
      send,
    }
  }
})
</script>
