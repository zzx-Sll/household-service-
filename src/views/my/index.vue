<template>

  <div class="my-container">

    <!-- 导航栏 -->
    <van-nav-bar left-text="我的"
                 :border="false"
                 class="my-nav-bar" />

    <!-- 已登录头部 -->
    <div v-if="$store.state.user.username"
         class="header not-login">
      <div class="login-btn">
        <img class="login-img"
             src="https://img.yzcdn.cn/vant/cat.jpeg"
             alt="">
        <span class="text">{{$store.state.user.username}}</span>
      </div>
    </div>

    <!-- 未登录头部 -->
    <div v-else
         class="header not-login">
      <div class="login-btn"
           @click="$router.push('/Login')">
        <img class="login-img"
             src="../../assets/mobile.png"
             alt="">
        <span class="text">点击登录</span>
      </div>
    </div>

    <!-- 宫格导航 -->
    <van-grid :column-num="4"
              :border="false"
              class="grid-nav"
              clickable>
      <van-grid-item class="grid-item" @click="$router.push('/user/profile')">
        <i slot="icon"
           class="iconfont icon-gonggongziliao"></i>
        <span slot="text"
              class="text">个人资料</span>
      </van-grid-item>
      <van-grid-item class="grid-item" @click="$router.push('../myfocus')">
        <i slot="icon"
           class="iconfont icon-wo"></i>
        <span slot="text"
              class="text">我的关注</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon"
           class="iconfont icon-pinglun"></i>
        <span slot="text"
              class="text">我的评价</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
        <i slot="icon"
           class="iconfont icon-29"></i>
        <span slot="text"
              class="text">已联系家政员</span>
      </van-grid-item>
    </van-grid>

    <div class="cell-container">
      <van-cell title="找家政服务记录"
                is-link
                center>
        <i slot="icon"
           class="iconfont icon-jilu"></i>
      </van-cell>
      <van-cell title="家政求职记录"
                is-link
                center>
        <i slot="icon"
           class="iconfont icon-jilu1"></i>
      </van-cell>
    </div>
    <div class="cell-container2">
      <van-cell title="身份认证通道"
                is-link
                @click="isShow = true"
                center>
        <i slot="icon"
           class="iconfont icon-renzheng-tianchong"></i>
      </van-cell>
      <van-cell title="关于我们"
                is-link
                @click="$router.push('/AboutUs')"
                center>
        <i slot="icon"
           class="iconfont icon-guanyu"></i>
      </van-cell>
    </div>

    <!-- 退出登录按钮 -->
    <van-button v-if="$store.state.user.username"
                type="default"
                size="large"
                class="out-login-btn"
                @click="outLogin">退出登录</van-button>

    <!-- 身份认证弹出层 -->
    <van-popup v-model="isShow"
               position="bottom">
      <van-cell title="家服人员授权认证"
                clickable
                to="/power"
                center />
      <van-cell title="家服公司管理员认证"
                clickable
                to="/companyAdmin"
                :border="false"
                center />
    </van-popup>
  </div>
</template>

<script>
export default {

  data () {
    return {
      isShow: false
    }
  },
  methods: {
    outLogin () {
      // 退出提示
      // 在组件中需要使用 this.$dialog 来调用弹框组件
      this.$dialog.confirm({
        title: '确认是否退出？'
      })
        .then(() => {
        // 确认退出：清除登录状态（容器中的 user + 本地存储中的 user）
          this.$store.commit('setUser', [null, null])
          window.localStorage.removeItem('usersdata')

          // 在退出登录把组件缓存清除掉
          // this.$store.commit('removeCachePage', 'LayoutIndex')
        })
        .catch(() => {
        // console.log('取消了退出')
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-container {
  box-sizing: border-box;
  background-color: #f8f8f8;
  .my-nav-bar {
    background-color: #3f51b5;
    ::v-deep .van-nav-bar__text {
      font-size: 32px;
      font-weight: 500;
      color: #fff;
    }
  }
  .header {
    height: 361px;
    background-color: #3f51b5;
    background-size: cover;
  }
  .not-login {
    display: flex;
    justify-content: center;
    align-items: center;
    .login-btn {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 100px;
      .login-img {
        height: 140px;
        width: 140px;
        border: 4px solid #fff;
        border-radius: 50%;
        margin-bottom: 25px;
      }
      .text {
        font-size: 32px;
        color: #fff;
      }
    }
  }
  .grid-nav {
    position: absolute;
    left: 0;
    right: 0;
    top: 395px;
    margin: 0 22px;
    .grid-item {
      height: 162px;
      margin-bottom: 14px;
      .iconfont {
        font-size: 45px;
        color: #979191;
      }
      .text {
        font-size: 18px;
        margin-top: 10px;
        color: #7b7777;
      }
    }
  }
  .cell-container {
    margin: 150px 0 0;
    .van-cell {
      height: 115px;
    }
    .iconfont {
      margin: 0 25px 0 12px;
      font-size: 36px;
      color: #979191;
    }
  }
  .cell-container2 {
    margin: 14px 0 0;
    .van-cell {
      height: 115px;
    }
    .iconfont {
      margin: 0 25px 0 12px;
      font-size: 36px;
      color: #979191;
    }
  }
  .out-login-btn {
    margin-top: 9px;
    font-size: 30px;
    color: #d86262;
  }
  .van-popup {
    .van-cell {
      .van-cell__title {
        text-align: center;
      }
    }
  }
}
</style>
