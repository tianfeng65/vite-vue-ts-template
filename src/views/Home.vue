<template>
  <h1>this is home</h1>
  <Router-Link to="/axios"> goto Axios </Router-Link>
  <Router-Link to="/vuex"> goto Vuex </Router-Link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>
