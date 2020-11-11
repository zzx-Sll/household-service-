<template>
  <div class="Maternity-Matron">

    <!-- 月嫂详情页的导航栏  -->
    <van-nav-bar class="login-navbar" left-text="家政平台" left-arrow @click-left="onClickLeft" />
    <!-- 月嫂详情页的导航栏  -->

    <!-- 月嫂信息的描述卡片  -->
    <van-card class="yue-card">
      <template #thumb>
        <img class="avatar" :src="currentWorkerDetails.worker_photo[currentWorkerDetails.id-1]" alt="">
      </template>
      <!-- 自定义标题 -->
      <!-- 关注按钮 -->
      <template #title>
        <span class="name">{{currentWorkerDetails.worker_name}}</span>
        <div class="followed" v-if="currentWorkerDetails.is_followed">
          <van-button @click="changeFollowed" class="followed-btn" round plain size="mini">已关注</van-button>
        </div>
        <div class="followed" v-else>
          <van-button @click="changeFollowed" class="followed-btn" round plain size="mini">关注</van-button>
        </div>
      </template>
      <!-- 关注按钮 -->
      <!-- 自定义标题 -->
      <!-- 月嫂描述区域-->
      <template #desc>
        <div class="desc">
          <div>
            <van-tag color="#3f51b5" plain round type="primary">{{currentWorkerDetails.comTag1}}</van-tag>
          </div>
          <div>
            <span>{{currentWorkerDetails.address}}</span>
            <span>|</span>
            <span>{{currentWorkerDetails.age}}岁</span>
            <span>|</span>
            <span>{{currentWorkerDetails.comTag2}}</span>
          </div>
        </div>
      </template>
      <!-- 月嫂描述区域  -->
      <!-- 注册公司职业区域 -->
      <template #footer>
        <div class="price-bottom">
          <div class="company"><span>注册公司：</span>
            <span>{{currentWorkerDetails.com_name}}</span>
          </div>
          <div class="pr">
            <span>职业：</span>
            <span v-for="(item,index) in profession" :key="index">{{item}}</span>
          </div>
        </div>
        <div class="info">
          <div>
            <i class="iconfont icon-renzheng-tianchong"></i>
            <span>身份信息已核实</span>
          </div>
          <div class="info-right">
            <van-tag color="#3f51b5" plain round type="primary">电话联系</van-tag>
            <van-tag color="#3f51b5" plain round type="primary">微信联系</van-tag>
          </div>
        </div>
      </template>
      <!-- 注册公司职业区域 -->

    </van-card>
    <!-- 月嫂信息的描述卡片  -->

    <!-- 月嫂技能和个人简介  -->
    <div class="main-info">
      <!-- 主要技能  -->
      <div class="main-skill">
        <ul class="border">
          <li><span>主要技能</span></li>
        </ul>
        <div class="skill-tag">
          <van-tag v-for="(item,index) in skills" :key="index" color="#3f51b5" plain round type="primary">{{item}}</van-tag>
        </div>
      </div>
      <!-- 主要技能  -->

      <!-- 个人简介 -->
      <div class="person-introduce">
        <!-- 折叠面板  -->
        <van-collapse v-model="activeNames">
          <van-collapse-item name="1">
            <template #title>
              <ul class="border">
                <li><span>个人简介</span></li>
              </ul>
            </template>
            <p>{{currentWorkerDetails.workerIntroduce}}</p>
          </van-collapse-item>
          <van-collapse-item name="2">
            <template #title>
              <ul class="border">
                <li><span>个人简介</span></li>
              </ul>
            </template>
            <div class="person-info">
              <ul>
                <li><span>任职公司：</span> <span>{{currentWorkerDetails.com_name}}</span></li>
                <li><span>籍贯民族：</span><span>{{currentWorkerDetails.nation}}</span></li>
                <li><span>生肖属相：</span><span>{{currentWorkerDetails.zodiac}}</span></li>
                <li><span>星座：</span><span>{{currentWorkerDetails.constellation}}</span></li>
                <li><span>出生日期：</span><span>{{currentWorkerDetails.birthday}}</span></li>
                <li><span>学历：</span><span>{{currentWorkerDetails.education}}</span></li>
              </ul>
            </div>
          </van-collapse-item>
        </van-collapse>
        <!-- 折叠面板  -->

      </div>
      <!-- 个人简介 -->

      <!-- 证件信息 -->
      <div class="card-info">
        <ul class="border">
          <li><span>证件信息</span></li>
        </ul>
        <div class="card-img">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <ul class="border">
          <li><span>证件信息</span></li>
        </ul>
        <div class="card-img">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
      <!-- 证件信息 -->
    </div>
    <!-- 月嫂技能和个人简介  -->
    <!-- 底部评价分享  -->
    <div class="footer">
      <van-tabbar>
        <van-tabbar-item icon="comment">评价</van-tabbar-item>
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
  props: {
    workerId: {
      type: [Number, String],
      required: true
    }
  },
  name: 'MaternityMatron',
  data () {
    return {
      // 折叠面板的索引
      activeNames: ['1', '2'],
      // 当前月嫂的详情
      currentWorkerDetails: null,
      // 月嫂职业
      profession: [],
      // 月嫂技能
      skills: []

    }
  },
  mounted () {
    // 调用获取当前公司信息的函数
    this.getCurrentWorker()
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    // 获取当前月嫂信息的函数

    async getCurrentWorker () {
      try {
        const { data: res } = await this.$request.get('getCurrentWorker/', {
          data: this.workerId
        }
        )
        // 将获得的公司信息存储到本地
        this.currentWorkerDetails = res.data

        console.log('当前月嫂的详情', this.currentWorkerDetails)
        // 将月嫂技能和职业存储起来
        const str = this.currentWorkerDetails.skills
        const str1 = this.currentWorkerDetails.profession
        this.skills.push(...str.split('|'))
        this.profession.push(...str1.split('|'))
        console.log('月嫂的技能', this.skills)
        console.log('月嫂的职业', this.profession)
      } catch (e) {
        this.$toast('获取月嫂详情失败')
      }
    },
    // 更改当前月嫂的关注信息
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
        if (this.currentWorkerDetails.is_followed) {
          const res = await this.$request.patch('patchCurrentWorker', {
            id: this.id,
            is_followed: this.currentWorkerDetails.is_followed
          })
          console.log(res)
          console.log(this.currentWorkerDetails.is_followed)
          // 取反关注状态
          this.currentWorkerDetails.is_followed = !this.currentWorkerDetails.is_followed
          this.$toast.success('已取消关注')
        } else {
          const res = await this.$request.patch('patchCurrentCompany', {
            id: this.comId,
            is_followed: this.currentWorkerDetails.is_followed
          })
          console.log(res)
          console.log(this.currentWorkerDetails.is_followed)
          // 取反关注状态
          this.currentWorkerDetails.is_followed = !this.currentWorkerDetails.is_followed
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
.Maternity-Matron {
  height: 89vh;
  overflow-y: auto;
  position: relative;
  padding-bottom: 164px;
  left: 0;
  .login-navbar {
    background-color: #3f51b5;
    height: 180px;
  }
  // 月嫂信息简介开始
  .yue-card {
    z-index: 2;
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 684px;
    height: 450px;
    background-color: #fff;
    border-radius: 10px;
    .avatar {
      width: 180px;
      height: 180px;
    }
    .name {
      font-size: 30px;
    }
    .desc {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .van-tag {
        padding: 10px 20px;
        margin: 0 10px;
      }
      div {
        margin-top: 20px;
        span {
          margin-left: 5px;
          color: #7b7777;
        }
      }
    }
    .price-bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      margin-left: 0;
      div {
        margin-top: 10px;
        span {
          margin: 0 5px;
          color: #7b7777;
        }
      }
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;
      height: 100px;
      // background: pink;
      .info-right {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 90px;
      }
      .icon-renzheng-tianchong:before {
        color: #3f51b5;
        margin-right: 10px;
      }
    }
    .followed {
      position: absolute;
      left: 0;
      .followed-btn {
        position: absoulte;
        left: 300px;
        top: 10px;
        width: 126px;
        height: 50px;
        background-color: #3f51b5;
        color: #fff;
      }
    }
  }
  // 月嫂信息简介结束

  // 月嫂技能和个人简介
  .main-info {
    padding: 20px 0;
    width: 684px;
    margin: 0 auto;
    margin-top: 450px;
    // height: 1000px;
    border-radius: 10px;
    background-color: #fff;
    // background-color: pink;
    .main-skill,
    .card-info {
      .border {
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

      .skill-tag {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 20px;
        span {
          padding: 10px 15px;
          margin: 0px 10px 10px 10px;
        }
      }
    }
    .person-introduce {
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

      p {
        padding: 0 25px;
        font-size: 16px;
        color: #7b7777;
      }
    }
  }
  // 月嫂技能和个人简介
  // 证件信息
  .card-info {
    .card-img {
      ul {
        margin-bottom: 15px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        li {
          margin: 0 8px;
          width: 200px;
          height: 148px;
          background-color: pink;
        }
      }
    }
  }
  // 证件信息
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
::v-deep .van-tabbar {
  height: 134px;
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
::v-deep .van-icon-comment::before,
.van-icon-share::before {
  color: #646566;
  font-size: 48px;
}
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
