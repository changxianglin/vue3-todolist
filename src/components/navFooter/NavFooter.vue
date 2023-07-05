<template>
  <div class="container">
    <div>
      已完成{{isComplete}} / 全部{{list.length}}
    </div>
    <div v-if="isComplete > 0" class="btn">
      <button class="clearn" @click="clearn">清除已完成</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue';
export default defineComponent({
  name: 'NavFooter',
  props: {
    list: {
      type: Array,
      required: true,
    }
  }, 
  components: {

  },

  setup(props, ctx) {
    let isComplete = computed(() => {
      let arr = props.list.filter((item) => {
        return item.complete
      })
      return arr.length
    })

    let clearn = () => {
      let arr = props.list.filter((item) => {
        return item.complete === false
      })
      ctx.emit('clear', arr)
    }

    return {
      isComplete,
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