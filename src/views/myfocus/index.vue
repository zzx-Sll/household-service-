<template>
  <div class="myfocus">
    <!-- 导航栏 -->
    <div class="header">
      <van-nav-bar :border="false"
                   class="page-nav-bar"
                   left-text="我的关注"
                   left-arrow
                   @click-left="$router.back()">

      </van-nav-bar>
      <van-grid direction="horizontal"
                :column-num="2"
                :border="false">
        <van-grid-item text="家服公司"
                       @click="flag=true"
                       :class="[flag ? 'active' :'']" />
        <van-grid-item text="家服人员"
                       @click="flag=false"
                       :class="[!flag ? 'active' :'']" />
      </van-grid>
    </div>

    <focus-company v-if="flag"></focus-company>

    <focus-worker v-else></focus-worker>
  </div>
</template>

<script>
import FocusWorker from './components/focus-woker'
import FocusCompany from './components/focus-company'
export default {
  data () {
    return {
      flag: true
    }
  },
  components: {
    FocusWorker,
    FocusCompany
  }

}
</script>

<style lang="scss" scoped>
.myfocus {
  margin-top: 240px;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}
.page-nav-bar {
  height: 100px;

  background-color: #3f51b5;
}
::v-deep .van-grid-item__content {
  color: white;
  background-color: #3f51b5;
}
::v-deep .van-nav-bar__text {
  color: white;
  font-size: 32px;
}
::v-deep .van-grid-item__text {
  color: white;
  font-size: 28px;
}
::v-deep .van-icon {
  color: white;
}
.active {
  ::v-deep .van-grid-item__text {
    padding-bottom: 15px;
    color: white;
    font-size: 28px;
    border-bottom: 2px solid #fff;
  }
}
</style>
