<template>
  <div>
    <input placeholder="请输入任务名称" v-model="value" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'NavHeader',
  props: {

  }, 
  components: {

  },

  setup(props, ctx) {
    let value = ''
    return {
      value
    }
  }
})
</script>

<style scoped lang="scss">

</style>