<template>
  <div class="my-container">

    <!-- 导航栏 -->
    <van-nav-bar left-text="我的"
                 :border="false"
                 class="my-nav-bar" />

    <!-- 已登录头部 -->
    <!-- <div class="header user-info">
      <div class="base-info">
        <div class="left">
          <van-image class="avatar"
                     round
                     fit="cover"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span class="uname">名称</span>
        </div>
      </div>
    </div> -->

    <!-- 未登录头部 -->
    <div class="header not-login">
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
      <van-grid-item class="grid-item">
        <i slot="icon"
           class="iconfont icon-gonggongziliao"></i>
        <span slot="text"
              class="text">个人资料</span>
      </van-grid-item>
      <van-grid-item class="grid-item">
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
                center>
        <i slot="icon"
           class="iconfont icon-renzheng-tianchong"></i>
      </van-cell>
      <van-cell title="关于我们"
                is-link
                center>
        <i slot="icon"
           class="iconfont icon-guanyu"></i>
      </van-cell>
    </div>

  </div>
</template>

<script>
export default {

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
        height: 132px;
        width: 132px;
        border-radius: 50%;
        margin-bottom: 30px;
      }
      .text {
        font-size: 28px;
        color: #fff;
      }
    }
  }
  .user-info {
    .base-info {
      height: 231px;
      padding: 76px 32px 23px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        display: flex;
        align-items: center;
        .avatar {
          width: 132px;
          height: 132px;
          border: 4px solid #fff;
          margin-right: 23px;
        }
        .uname {
          color: #fff;
          font-size: 30px;
        }
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
}
</style>
