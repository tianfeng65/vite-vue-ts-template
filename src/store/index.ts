import { createStore } from 'vuex'

const defaultState = {
  count: 0
}

type State = typeof defaultState

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    increment(state: State) {
      state.count += 1
    },
    decrement(state: State) {
      state.count -= 1
    }
  },
  actions: {
    increment(context) {
      context.commit('increment')
    },
    decrement(context) {
      context.commit('decrement')
    }
  },
  getters: {
    double(state: State) {
      return state.count * 2
    }
  }
})
