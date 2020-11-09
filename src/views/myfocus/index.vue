<template>
  <div class="myfocus">
    <!-- 导航栏 -->
    <van-nav-bar
      :border="false"
      class="page-nav-bar"
      left-text="我的关注"
      left-arrow
      @click-left="$router.back()"
    >

</van-nav-bar>
<van-grid direction="horizontal" :column-num="2" :border="false">
  <van-grid-item  text="家服公司" @click="flag=true" :class="[flag ? 'active' :'']"/>
  <van-grid-item  text="家服人员" @click="flag=false" :class="[!flag ? 'active' :'']" />
</van-grid>

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
.page-nav-bar{
    height: 128px;

    background-color:#3F51B5 ;

  }
  ::v-deep .van-grid-item__content{
    color: white;
    background-color: #3F51B5;

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
    border-bottom: 3px solid white;
  }

</style>
