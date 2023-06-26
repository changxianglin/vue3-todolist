<template>
  <div class="container">
    <div>
      已完成{{isComplete}} / 全部{{all}}
    </div>
    <div v-if="isComplete > 0" class="btn">
      <button class="clearn">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, } from 'vue';
export default defineComponent({
  name: 'NavFooter',
  props: {

  }, 
  components: {

  },

  setup(props, ctx) {
    let isComplete = ref(1)
    let all = ref(10)

    let clearn = () => {
    
    }

    return {
      isComplete,
      all,
      clearn,
    }
  }
})
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    align-items: center;
    .btn {
      margin-left: 10px;
    }
  }
</style>