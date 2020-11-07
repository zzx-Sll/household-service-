<template>
  <div id="app">
    <div>家政服务平台</div>
    <van-button type="primary" @click="getRes">主要按钮</van-button>
    <router-view />
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods: {
    async  getRes () {
      const res = await axios.get('http://localhost:8080/getAPI')
      console.log(res)
    }
  }
}
</script>

<style lang="scss">
</style>
