<template>
  <h1>this is axios</h1>
  <img class="dog-img" @click="handleClick" :src="dogImg" alt="" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import fetchDogImg from '@/api'

export default defineComponent({
  name: 'Axios',
  setup() {
    const dogImg = ref('https://images.dog.ceo/breeds/pug/n02110958_12080.jpg')
    const handleClick = () => {
      fetchDogImg().then((res) => {
        dogImg.value = res.message
      })
    }
    return {
      dogImg,
      handleClick
    }
  }
})
</script>
