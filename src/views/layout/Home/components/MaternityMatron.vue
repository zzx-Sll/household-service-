<template>
  <div class="Maternity-Matron">

    <!-- 月嫂详情页的导航栏  -->
    <van-nav-bar class="login-navbar" left-text="家政平台" left-arrow @click-left="onClickLeft" />
    <!-- 月嫂详情页的导航栏  -->

    <!-- 月嫂信息的描述卡片  -->
    <van-card class="yue-card" title="张丽丽" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
      <!-- 月嫂描述区域  -->
      <template #desc>
        <div class="desc">
          <div>
            <van-tag color="#3f51b5" plain round type="primary">二星育婴师</van-tag>
          </div>
          <div>
            <span>湖南长沙</span>
            <span>|</span>
            <span>46岁</span>
            <span>|</span>
            <span>七年经验</span>
          </div>
        </div>
      </template>
      <!-- 月嫂描述区域  -->
      <!-- 注册公司职业区域 -->
      <template #footer>
        <div class="price-bottom">
          <div class="company"><span>注册公司：</span>
            <span>湖南前海友网络科技有限公司</span>
          </div>
          <div class="pr">
            <span>职业：</span>
            <span>保姆</span>
            <span>月嫂</span>
            <span>育婴师</span>
            <span>早教/托育</span>
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
      <!-- 关注按钮 -->
      <template #title>
        <div class="followed">
          <van-button class="followed-btn" round plain size="mini">关注</van-button>
        </div>
      </template>
      <!-- 关注按钮 -->
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
          <van-tag color="#3f51b5" plain round type="primary">月子餐</van-tag>
          <van-tag color="#3f51b5" plain round type="primary">家庭保洁</van-tag>
          <van-tag color="#3f51b5" plain round type="primary">洗衣</van-tag>
          <van-tag color="#3f51b5" plain round type="primary">育婴护理</van-tag>
          <van-tag color="#3f51b5" plain round type="primary">小孩看护</van-tag>
          <van-tag color="#3f51b5" plain round type="primary">家庭辅导</van-tag>
          <van-tag color="#3f51b5" plain round type="primary">做饭</van-tag>
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
            <p>学习期间表现优秀，完成了机械设计，机械制造技术基础Ⅰ，理论力学，材料力学，结构力学，金属结构，液压与气压传动，机械工程控制基础，画法几何与机械制图等专业学科的学习；通过了英语四级，计算机C语言二级，全国计算机辅助技术应用工程师考试并获得相关证书。同时，本人工作认真负责，能吃苦耐劳，严格要求自己，上进心强，乐于挑战，对新的事物有较强的接受能力；有团队精神和敬业精神，性格随和开朗、待人诚恳、具有良好的人际关系。</p>
          </van-collapse-item>
          <van-collapse-item name="2">
            <template #title>
              <ul class="border">
                <li><span>个人简介</span></li>
              </ul>
            </template>
            <div class="person-info">
              <ul>
                <li><span>任职公司：</span> <span>湖南前还有家网络科技有限公司</span></li>
                <li><span>籍贯民族：</span><span>汉族</span></li>
                <li><span>生肖属相：</span><span>汉族</span></li>
                <li><span>星座：</span><span>摩羯座</span></li>
                <li><span>出生日期：</span><span>1977-12-23</span></li>
                <li><span>学历：</span><span>中专</span></li>
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
  name: 'MaternityMatron',
  data () {
    return {
      // 折叠面板的索引
      activeNames: ['1', '2']

    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
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
      position: relative;
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
