<template>
  <div class="Login">
    <!-- 登录页面导航栏  -->
    <van-nav-bar class="login-navbar" title="登录" left-arrow @click-left="onClickLeft" />
    <!-- 登录页面导航栏  -->

    <!-- 登录表单 -->
    <van-form @submit="onSubmit" ref="loginFormRefs">
      <van-field v-model="username" name="username" label="用户名" placeholder="用户名" :rules="loginForm.username" />
      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码" :rules="loginForm.password" />
      <div style="margin: 16px;">
        <van-button class="login-btn" block native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <!-- 登录表单 -->
  </div>
</template>

<script>
import request from '../../utiles/request'
export default {
  name: 'Login',
  data () {
    return {
    //  登录的用户名,密码
      username: 'admin',
      password: '123456',
      // 验证登录时手机的规则
      loginForm: {
        username: [{ required: true, message: '请填写用户名' }, { pattern: /^[a-zA-Z0-9_-]{4,12}$/, message: '请填入合法用户名' }],
        password: [{ required: true, message: '请填写密码' }, { pattern: /^[a-zA-Z0-9_-]{6,12}$/, message: '请填入合法密码格式' }]
      }
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    // 点击提交按钮，跳转到home页面
    async onSubmit () {
      if (!this.$refs.loginFormRefs.validate('username' || 'password')) { return this.$$toast('登录失败') }
      // 显示加载中

      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })

      // 调用接口
      const res = await request({
        method: 'post',
        url: 'login',
        data: {
          username: this.username,
          password: this.password
        }

      })
      // 提示成功
      this.$toast.success('登录成功')
      // 登录成功，跳转到home
      this.$router.push('./Home')
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
.Login {
  .login-navbar {
    background-color: #3f51b5;
  }
}
::v-deep .van-icon-arrow-left::before {
  color: #fff;
}
::v-deep .van-nav-bar__title {
  color: #fff;
}
.login-btn {
  color: #fff;
  background-color: #3f51b5;
}
</style>
