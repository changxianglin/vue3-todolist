<template>
  <div>
    <h1>This is an child page</h1>
    parant transform data is {{ msg }}
    <button @click="send">transform data to parant</button>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Child',
  props: {
    msg: {
      type: String,
      required: false,
      default: '默认值',
    }
  },
  setup(props, ctx) {
    console.log('props', props)
    let childMsg = ref('这是子组件的数据')

    const send = () => {
      ctx.emit('send', childMsg.value)
    }

    return {
      childMsg,
      send,
    }
  }
})
</script>
