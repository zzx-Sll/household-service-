import axios from 'axios';
import { company } from 'vuex';
<template>
  <div class="Company-Details">
    <!-- 家政公司详情组件 -->
    <!-- 家政公司详情页的导航栏  -->
    <van-nav-bar class="login-navbar"
                 left-text="家政平台"
                 left-arrow
                 @click-left="onClickLeft" />
    <!-- 家政公司详情页的导航栏  -->

    <!-- 家政公司的轮播图片 -->
    <div class="company-swipe">
      <van-swipe class="my-swipe"
                 :autoplay="3000"
                 indicator-color="white">
        <van-swipe-item v-for="(img,index) in  companyPhoto "
                        :key="index"><img :src="img"></van-swipe-item>

      </van-swipe>
    </div>
    <!-- 家政公司的轮播图片 -->

    <!-- 关注与注册认证区域 -->
    <div class="followed-reg">
      <div class="reg-header">
        <div class="header-left">
          <span>{{currentCompanyDetails.regPerson}}</span>
          <span>注册家政员数</span>
        </div>
        <div class="header-right">
          <span>{{currentCompanyDetails.attestationPerson}}</span>
          <span>已认证客户数</span>
        </div>
        <div class="center"></div>
      </div>
      <div class="reg-footer">
        <!-- 关注按钮 -->
        <van-button @click="changeFollowed"
                    v-if="currentCompanyDetails.is_followed"
                    class="followed-btn"
                    round
                    plain
                    size="mini">已关注</van-button>
        <van-button v-else
                    @click="changeFollowed"
                    class=" followed-btn"
                    round
                    plain
                    size="mini">关注</van-button>
        <!-- 关注按钮 -->
      </div>
    </div>
    <!-- 关注与注册认证区域 -->

    <!-- 业务范围  -->
    <div class="line-business">
      <ul class="border">
        <li><span>业务范围</span></li>
      </ul>
      <div class="down">
        <div class="down-business">
          <van-image class="down-img"
                     round
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span>月嫂</span>
        </div>
        <div class="down-business">
          <van-image class="down-img"
                     round
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span>月嫂</span>
        </div>
        <div class="down-business">
          <van-image class="down-img"
                     round
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span>月嫂</span>
        </div>
      </div>
    </div>
    <!-- 业务范围  -->

    <!-- 公司资料 -->
    <div class="company-info">
      <van-tabs v-model="active"
                swipeable>
        <van-tab title="公司资料">
          <!-- 公司资质和办公环境 -->
          <div class="card-info">
            <ul class="border">
              <li><span>公司资质</span></li>
            </ul>
            <div class="card-img">
              <ul>
                <li><img :src="companyPhoto[1]"
                       alt=""></li>
                <li><img :src="companyPhoto[0]"
                       alt=""></li>
                <li><img :src="companyPhoto[2]"
                       alt=""></li>

              </ul>
            </div>
            <ul class="border">
              <li><span>办公环境</span></li>
            </ul>
            <div class="card-img">
              <ul>
                <li><img :src="companyPhoto[2]"
                       alt=""></li>
                <li><img :src="companyPhoto[0]"
                       alt=""></li>
                <li><img :src="companyPhoto[3]"
                       alt=""></li>
              </ul>
            </div>
          </div>
          <!-- 证件信息 -->
          <!-- 获得荣誉 -->
          <div class="card-info">
            <ul class="border">
              <li><span>获得荣誉</span></li>
            </ul>
            <div class="card-img">
              <ul>
                <li><img :src="companyPhoto[3]"
                       alt=""></li>
                <li><img :src="companyPhoto[1]"
                       alt=""></li>
                <li><img :src="companyPhoto[2]"
                       alt=""></li>
              </ul>
            </div>
            <ul class="border">
              <li><span>团队风采</span></li>
            </ul>
            <div class="card-img">
              <ul>
                <li><img :src="companyPhoto[3]"
                       alt=""></li>
                <li><img :src="companyPhoto[1]"
                       alt=""></li>
                <li><img :src="companyPhoto[0]"
                       alt=""></li>
              </ul>
            </div>
          </div>
          <!-- 证件信息 -->
          <!-- 公司基本资料  -->
          <div class="details">
            <ul class="border">
              <li><span>基本资料</span></li>
            </ul>
            <div class="base-details">
              <div><span>公司名称：</span><span>{{currentCompanyDetails.name}}</span></div>
              <div><span>法人代表：</span><span>{{currentCompanyDetails.representative}}</span></div>
              <div><span>公司电话：</span><span>{{currentCompanyDetails.companyPhone}}</span></div>
              <div><span>公司规模：</span><span>{{currentCompanyDetails.scale}}</span></div>
              <div><span>公司地址：</span><span>{{currentCompanyDetails.address}}</span></div>
            </div>
          </div>
          <!-- 公司基本资料  -->
          <!-- 公司介绍 -->
          <div class="company-introduce">
            <ul class="border">
              <li><span>公司介绍</span></li>
            </ul>
          </div>
          <div class="introduce">
            <p>{{currentCompanyDetails.companyIntroduce}}</p>
          </div>
          <!-- 公司介绍 -->
        </van-tab>
        <van-tab title="注册人员">内容 2</van-tab>
      </van-tabs>
    </div>
    <!-- 公司资料 -->
    <!-- 底部评价分享  -->
    <div class="footer">
      <van-tabbar>
        <van-tabbar-item icon="share">分享</van-tabbar-item>
        <van-tabbar-item icon="chat">微信联系</van-tabbar-item>
        <van-tabbar-item icon="phone">电话联系</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 底部评价分享  -->
  </div>
</template>

<script>
export default {
  name: 'CompanyDetails',
  props: {
    comId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      // 公司资料标签高亮
      active: 0,
      // 公司详情的对象
      currentCompanyDetails: {},
      // 公司轮播图片
      companyPhoto: []
    }
  },
  created () {
    // 调用获取当前公司信息的函数
    this.getCurrentCompany()
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    // 获取当前公司信息的函数
    async getCurrentCompany () {
      try {
        const { data: res } = await this.$request.get('getCurrentCompany/', {
          data: this.comId
        }
        )
        // 将获得的公司信息存储到本地
        this.currentCompanyDetails = res.data
        this.companyPhoto = res.data.photo
        console.log(this.currentCompanyDetails)
      } catch (e) {
        this.$toast('获取公司详情失败')
      }
    },
    //  切换关注公司状态的函数
    async changeFollowed () {
    // 显示加载状态
    // 拿到公司id,
    // 取反关注
    // 调接口
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })

      try {
        // 判断当前的关注状态
        if (this.currentCompanyDetails.is_followed) {
          const res = await this.$request.patch('patchCurrentCompany', {
            id: this.comId,
            is_followed: this.currentCompanyDetails.is_followed
          })
          console.log(res)
          console.log(this.currentCompanyDetails.is_followed)
          // 取反关注状态
          this.currentCompanyDetails.is_followed = !this.currentCompanyDetails.is_followed
          this.$toast.success('已取消关注')
        } else {
          const res = await this.$request.patch('patchCurrentCompany', {
            id: this.comId,
            is_followed: this.currentCompanyDetails.is_followed
          })
          console.log(res)
          console.log(this.currentCompanyDetails.is_followed)
          // 取反关注状态
          this.currentCompanyDetails.is_followed = !this.currentCompanyDetails.is_followed
          this.$toast.success('成功关注')
        }
      } catch (e) {
        this.$toast.fail('操作失败')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Company-Details {
  height: 90vh;
  overflow-y: auto;
  position: relative;
  left: 0;
  //导航栏
  .login-navbar {
    background-color: #3f51b5;
    height: 180px;
  }
  // 轮播图
  .company-swipe {
    z-index: 2;
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 674px;
    height: 342px;
    // background: pink;
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      height: 342px;
      line-height: 100%;
      text-align: center;
      background-color: #39a9ed;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  //关注与认证区域
  .followed-reg {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    margin-top: 340px;
    padding: 20px;
    width: 674px;
    height: 292px;
    border-radius: 10px;
    background: #fff;
    .reg-header {
      position: relative;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: start;
      flex: 8;
      // background-color: green;
      .header-left,
      .header-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span:first-child {
          font-size: 50px;
          color: #3f51b5;
        }
        span:last-child {
          font-size: 25px;
        }
      }
      .header-left {
        flex: 1;
        // background-color: yellow;
      }
      .header-right {
        flex: 1;
      }
      .center {
        position: absolute;
        top: 35%;
        left: 49.5%;
        width: 0;
        height: 70px;
        border: 3px solid #ccc;
      }
    }
    .reg-footer {
      flex: 2;
      // height: 50px;
      // background-color: blue;
      .followed-btn {
        width: 126px;
        height: 50px;
        background-color: #3f51b5;
        color: #fff;
      }
    }
  }
  //业务范围
  .line-business {
    width: 674px;
    border-radius: 10px;
    margin: 0 auto;
    .border {
      height: 98px;
      line-height: 98px;
      background: #fff;
      margin-bottom: 8px;
      li {
        margin: 15px 10px;
        padding: 0 15px;
        // border-left: 3px solid green;
        font-size: 33px;
        span {
          border-left: 10px solid #3f51b5;
          padding: 0 15px;
        }
      }
    }
    .down {
      display: flex;
      justify-content: start;
      height: 226px;
      background-color: #fff;
      .down-business {
        display: flex;
        margin: 0 15px;
        flex-direction: column;
        justify-content: center;
        span {
          text-align: center;
          font-size: 30px;
        }
        // align-items: start;
        .down-img {
          width: 100px;
          height: 100px;
        }
      }
    }
  }
  //业务范围

  // 公司资料
  .company-info {
    width: 674px;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 15px;
    .border {
      li {
        margin: 15px 0;
        // padding: 0 15px;
        // border-left: 3px solid green;
        font-size: 33px;
        span {
          border-left: 10px solid #3f51b5;
          padding: 0 15px;
        }
      }
    }
    .van-tabs {
      background-color: #fff;
      padding: 0 15px;
      .card-info {
        .card-img {
          ul {
            margin-bottom: 15px;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            li {
              margin: 0 8px;
              width: 190px;
              height: 148px;
              img {
                height: 100%;
                width: 100%;
              }
            }
          }
        }
      }
      .base-details {
        div {
          margin: 0;
          height: 50px;
          line-height: 50px;
          padding: 0 15px;
          span {
            font-size: 20px;
            white-space: normal;
          }
        }
      }
    }
  }
  // 公司资料
  // 公司介绍
  .introduce {
    p {
      text-indent: 2em;
      font-size: 20px;
      color: #333;
      padding: 0 0 15px;
    }
  }
  // 公司介绍
  // 底部信息
  .footer {
    // width: 100%;
    height: 134px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 3;
    background-color: pink;
  }

  // 底部信息
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
::v-deep .van-nav-bar__text {
  color: #ffffff;
}
::v-deep .van-tabs__line {
  background-color: #4556b7;
}
::v-deep .van-tabbar {
  height: 134px;
}
// ::v-deep .van-icon-comment::before,
// .van-icon-share::before {
//   color: #646566;
//   font-size: 48px;
// }
::v-deep .van-tabbar-item__text {
  color: #7b7777;
}
::v-deep .van-icon-share::before {
  color: #646566;
  font-size: 48px;
}
::v-deep .van-icon-chat::before {
  color: #646566;
  font-size: 48px;
}
::v-deep .van-icon-phone::before {
  color: #646566;
  font-size: 48px;
}
</style>
