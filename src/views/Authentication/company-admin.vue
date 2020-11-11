<template>
  <div class="comprny-admin">
    <!-- 导航栏 -->
    <van-nav-bar left-text="管理员身份认证"
                 left-arrow
                 :border="false"
                 @click-left="$router.back()"
                 class="power-nav-bar" />

    <!-- 已登录头部 -->
    <div class="header not-login">
      <div class="login-btn">
        <img class="login-img"
             :src="userphoto"
             alt="">
        <span class="text">{{$store.state.user.username}}</span>
      </div>
    </div>

    <!-- 身份验证 -->
    <div class="verify-from">
      <div class="box-group">
        请输入您的用户名和密码进行认证
      </div>
      <p></p>
      <van-field v-model="username"
                 name="用户名称"
                 label="用户名称："
                 :rules="[{ required: true, message: '请填写用户名称' }]" />
      <van-field v-model="password"
                 type="password"
                 name="用户密码"
                 label="用户密码："
                 :rules="[{ required: true, message: '请填写用户密码' }]" />
    </div>

    <!-- 提交认证按钮 -->
    <van-button class="consent-btn"
                color="#3f51b5"
                @click="approveData"
                size="large">提交认证</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      userphoto: ''
    }
  },
  created () {
    this.userPhoto()
  },
  methods: {
    async userPhoto () {
      const { data } = await this.$request.get('getUserData')
      this.userphoto = data.data[0].photo
    },
    approveData () {
      const data = window.localStorage.getItem('usersdata')
      if (JSON.parse(data).username !== this.username || JSON.parse(data).password !== this.password) {
        return this.$toast('用户名或密码不正确')
      }
      this.$toast.success('认证成功')
      this.$router.push('/My')
    }
  }
}
</script>

<style lang="scss" scoped>
.comprny-admin {
  .power-nav-bar {
    background-color: #3f51b5;
    ::v-deep .van-nav-bar__left {
      .van-icon-arrow-left,
      .van-nav-bar__text {
        color: #fff;
        font-size: 28px;
      }
    }
  }
  .header {
    height: 350px;
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
  .verify-from {
    background-color: #fff;
    height: 810px;
    position: absolute;
    left: 0;
    right: 0;
    top: 390px;
    border-radius: 10px;
    margin: 0 28px;
    .box-group {
      height: 104px;
      font-size: 28px;
      line-height: 104px;
      margin-left: 60px;
      margin-right: 60px;
      border-bottom: 1px solid #f0eeee;
    }
    p {
      position: absolute;
      left: 30px;
      right: 0;
      top: -10px;
      width: 8px;
      height: 28px;
      background-color: #3f51b5;
    }
    .van-field {
      border-bottom: 1px solid #f0eeee;
      height: 94px;
    }
  }
  .consent-btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 28px;
  }
}
</style>
