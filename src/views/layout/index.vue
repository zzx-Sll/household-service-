
<template>
  <div class="layout-container">
    <!-- layout 的子路由出口，或者说是二级路由 -->
    <router-view></router-view>

    <!-- /子路由出口 -->

    <!-- 标签导航栏 -->
    <!-- route: 开启路由模式-->
    <van-tabbar class="layout-tabbar" route>
      <van-tabbar-item to="/Home">
        <i slot="icon" class="iconfont icon-shouye"></i>
        <span class="text">首页</span>
      </van-tabbar-item>
      <van-tabbar-item to="/Company">
        <i slot="icon" class="iconfont icon-gongsi"></i>
        <span class="text">家服公司</span>
      </van-tabbar-item>
      <van-tabbar-item to="/HouseWorker">
        <i slot="icon" class="iconfont icon-icon"></i>
        <span class="text">家服人员</span>
      </van-tabbar-item>
      <van-tabbar-item to="/My">
        <i slot="icon" class="iconfont icon-wo"></i>
        <span class="text">我的</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  name: 'LayoutIndex',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
  .layout-tabbar {
    height: 134px;
    i.iconfont {
      font-size: 50px;
      color: #979191;
    }
    span.text {
      font-size: 20px;
    }
  }
}
</style>
