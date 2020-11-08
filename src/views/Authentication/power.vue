<template>
  <div class="power">
    <!-- 导航栏 -->
    <van-nav-bar left-text="授权与协议"
                 left-arrow
                 :border="false"
                 @click-left="$router.back()"
                 class="power-nav-bar" />

    <!-- 已登录头部 -->
    <div class="header not-login">
      <div class="login-btn">
        <img class="login-img"
             src="https://img.yzcdn.cn/vant/cat.jpeg"
             alt="">
        <span class="text">{{$store.state.user.username}}</span>
      </div>
    </div>

    <!-- 协议内容 -->
    <div class="agreement">
      <p>
        湖南家政平台在此特别提醒您（家服员、家政员）在阅读前，请认真阅读本《授权协议》（以下简称“协议”）请您谨慎阅读并选择接受或者不接受本协议。本协议由湖南家政平台根据国家政策实时更新，更新后协议条款一旦公布即代替原来的协议条款，恕不另行通知。
      </p>
      <div>一、本人自愿申请建立家庭服务员信用记录</div>
      <p>
        本人自愿加入湖南家政平台，湖南家政平台可以使用本人
        身份信息、肖像信息、家庭服务信息和职业信息；身份信息
        包含但不限于身份证号码，姓名，性别，民族，家庭住址，
        健康状况，教育水平等；职业信息包含但不限于从业经历，
        培训情况、培训考核情况、消费者评价和投诉情况等；
      </p>
      <div>二、本人承诺：</div>
      <p>
        本人自愿加入湖南家政平台，湖南家政平台可以使用本人
        身份信息、肖像信息、家庭服务信息和职业信息；身份信息
        包含但不限于身份证号码，姓名，性别，民族，家庭住址，
        健康状况，教育水平等；职业信息包含但不限于从业经历，
        培训情况、培训考核情况、消费者评价和投诉情况等；
      </p>
      <p>
        请点击：我也已阅读并同意以上协议“按钮，代表您同意
        本协议的全部内容，并授权您在诚信平台的所有资料都可以
        向消费者显示。
      </p>
    </div>

    <!-- 同意协议按钮 -->
    <van-button class="consent-btn"
                color="#3f51b5"
                size="large">我已阅读并同意以上协议</van-button>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.power {
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
  .agreement {
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    top: 375px;
    border-radius: 10px;
    margin: 0 28px;
    p {
      font-size: 24px;
      margin: 6px 20px;
      line-height: 42px;

      text-indent: 1em;
    }
    div {
      font-size: 24px;
      line-height: 42px;
      margin: 6px 20px;
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
