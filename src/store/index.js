import { createStore } from 'vuex'

export default createStore({
  state: {
    list: [
      {
        title: '吃饭',
        complete: false,
      },
      {
        title: '睡觉',
        complete: false,
      },
      {
        title: '打代码',
        complete: true,
      }
    ],
  },
  mutations: {
    addTodos(state, payload) {
      state.list.push(payload)
    },
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    clearn(state, payload) {
      state.list = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
