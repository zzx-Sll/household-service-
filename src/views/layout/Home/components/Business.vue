<template>
  <div>
    <van-nav-bar left-text="入驻商务部"
                 left-arrow
                 @click-left="onClickLeft"
                 class="navbar" />
    <div class="kard">
      <van-field v-model="text"
                 label="文本" />
      <van-field v-model="text"
                 label="文本" />
      <van-field v-model="text"
                 label="文本" />
      <van-field v-model="text"
                 label="文本" />
      <van-field v-model="text"
                 label="文本" />
      <van-field v-model="text"
                 label="文本" />

    </div>
  </div>
</template>

<script>
export default {
  name: 'Buseniess',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    onClickLeft () {

    }
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #3f51b5;
  height: 180px;
}
.head {
  margin-top: 0;
  height: 80px;
  background-color: #3f51b5;
}
::v-deep .navbar {
  .van-nav-bar__arrow {
    color: white;
  }
  .van-nav-bar__text {
    color: white;
  }
}
.kard {
  width: 704px;
  height: 1126px;

  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>
