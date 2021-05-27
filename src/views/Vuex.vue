<template>
  <h1>this is Vuex page</h1>
  <button @click="handleClick">count is: {{ count }}</button>
  <p>double count is: {{ doubleCount }}</p>
  <Router-Link to="/">goto Home</Router-Link>
  <Router-Link to="/axios">goto Axios</Router-Link>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Vuex',
  setup() {
    const store = useStore()
    const handleClick = () => {
      store.commit('increment')
    }
    return {
      handleClick,
      count: computed(() => store.state.count),
      doubleCount: computed(() => store.getters.double)
    }
  }
})
</script>
