
<template>
  <div class="all">
    <van-nav-bar left-text="家政平台"
                 :border="false"
                 class="navbar" />

    <div class="head">
      <!-- 上轮播图 -->
      <div class="swipe">
        <van-swipe :autoplay="3000"
                   class="swipeimg">
          <van-swipe-item v-for="(image, index) in  companyImages"
                          :key="index">
            <img :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 服务内容 -->
    <div class="content">
      <van-grid :column-num="3"
                gutter="11px"
                :border="false">
        <van-grid-item text="入驻商务部"
                       @click="$router.push('/Business')">
        </van-grid-item>
        <van-grid-item text="家政求职"
                       @click="$router.push('/HouseJob')">
        </van-grid-item>
        <van-grid-item text="找家庭服务"
                       @click="$router.push('/DomesticNeeds')">
        </van-grid-item>
        <van-grid-item text="线上家政培训">
        </van-grid-item>
        <van-grid-item text="线上家政保险">
        </van-grid-item>
        <van-grid-item text="合同">
        </van-grid-item>
      </van-grid>
    </div>

    <!-- 服务项目 -->
    <div class="content2">
      <ul>
        <!-- 月嫂  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1492212475,2131340147&fm=26&gp=0.jpg"
                   alt=""></div>
            <span>月嫂</span>
          </div>
        </li>
        <!-- 月嫂  -->

        <!-- 育婴师  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=281628446,1323517014&fm=26&gp=0.jpg"
                   alt=""></div>
            <span>育婴师</span>
          </div>
        </li>
        <!-- 育婴师  -->

        <!-- 保洁/清洁  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00020-3037.jpg"
                   alt=""></div>
            <span>保洁/清洁</span>
          </div>
        </li>
        <!-- 保洁/清洁  -->

        <!-- 保姆  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2933186354,1465652520&fm=26&gp=0.jpg"
                   alt=""></div>
            <span>保姆</span>
          </div>
        </li>
        <!-- 保姆  -->

        <!-- 产康师  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3920120743,111144046&fm=26&gp=0.jpg"
                   alt=""></div>
            <span>产康师</span>
          </div>
        </li>
        <!-- 产康师  -->

        <!-- 早教/托育  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1713596016,3106738539&fm=26&gp=0.jpg"
                   alt=""></div>
            <span>早教/托育</span>
          </div>
        </li>
        <!-- 早教/托育  -->

        <!-- 养老/陪护  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=856703829,384709557&fm=26&gp=0.jpg"
                   alt=""></div>
            <span>养老/陪护</span>
          </div>
        </li>
        <!-- 养老/陪护  -->

        <!-- 家装/搬家  -->
        <li>
          <div class="box">
            <div class="radiu"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3675762135,617741686&fm=26&gp=0.jpg"
                   alt=""></div>
            <span>家装/搬家</span>
          </div>
        </li>
        <!-- 家装/搬家  -->
      </ul>
    </div>
    <!-- 公司中 -->
    <div class="companydesign">
      <van-cell icon="shop-o"
                size="large">
        <div slot="title">湖南家信认证家服公司</div>
      </van-cell>
      <!-- 公司简介 -->
      <van-cell v-for="(item,index) in companyList"
                :key="item.id"
                @click="$router.push(`/CompanyDetails/${item.id}`)">
        <div class="comment_list">
          <div class="touxiang">
            <img :src="item.photo[index]"
                 alt="">
            <div>
              <van-icon name="location"
                        class="dizhi" />{{item.distance}}
            </div>
          </div>
          <div class="youall">
            <div class="nameicon">
              <div>{{item.name}}</div>
            </div>
            <div>{{item.ctitle}}</div>
            <div class="company-tag">
              <van-tag color="#3f51b5"
                       plain
                       round
                       type="primary">{{item.comTag1}}</van-tag>
              <van-tag color="#3f51b5"
                       plain
                       round
                       type="primary">{{item.comTag2}}</van-tag>
              <van-tag color="#3f51b5"
                       plain
                       round
                       type="primary">{{item.comTag3}}</van-tag>

            </div>
            <div style="width:280px; overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;">{{item.address}}</div>
          </div>
        </div>
      </van-cell>
      <!-- 公司简介 -->
      <div class="gengduo"
           @click="$router.push('/Company')">更多公司
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 服务人员详情 -->
    <div class="companydesign">
      <van-cell icon="manager"
                size="large">
        <div slot="title">诚信注册家服员</div>
      </van-cell>
      <!-- 月嫂信息 -->
      <van-cell @click="$router.push(`/MaternityMatron/${item.id}`)"
                v-for="(item,index) in workerList"
                :key="item.id">
        <div class="comment_list">
          <div class="touxiang">
            <img :src="workerImages[index]"
                 alt="">
          </div>
          <div class="youall">
            <div class="nameicon">
              <div>{{item.worker_name}}</div>
              <div>{{item.price}}</div>
            </div>
            <div class="skil">
              <span class="peoplegrid">{{item.comTag1}}</span>
              <span class="peoplegrid">{{item.comTag2}}</span>

            </div>
            <div class="myself"><span>{{item.address}}</span> | <span>{{item.age}}岁</span> | <span>服务{{item.serve_number}}户</span> | <span>9条评价</span></div>

          </div>
        </div>
      </van-cell>
      <div class="gengduo"
           @click="$router.push('/HouseWorker')">更多家服员
        <van-icon name="arrow" />
      </div>
    </div>

  </div>
</template>

<script>

export default {

  created () {
    // 调用获取首页展示三个公司的函数
    this.getThreeCompanys()
    // 调用获取首页显示三个月嫂信息的函数
    this.getThreeWorkers()
  },
  mounted () {

  },
  data () {
    return {
      // 公司信息列表
      companyList: [],
      // 公司展示图片
      companyImages: [],
      // 月嫂信息列表
      workerList: [],
      // 月嫂展示图片
      workerImages: []
    }
  },

  methods: {
    // 获取首页三个公司的函数
    async getThreeCompanys () {
      try {
        const { data: res } = await this.$request.get('getCompanys')
        // console.log('?', res.data)
        // 变历获取的数据
        res.data.forEach((item, i) => {
          if (i <= 2) {
          // 获取首页的三个公司
            this.companyList.push(res.data[i])
            // 实现首页公司图片的轮播
            this.companyImages = res.data[0].photo
            return this.companyList
          }
        })
      } catch (e) {
        this.$toast('获取公司信息失败')
      }
    },
    // 获取首页三个月嫂信息的函数
    async getThreeWorkers () {
      try {
        const { data: res } = await this.$request.get('getAllWorker')
        console.log('?', res.data)
        // 变历获取的数据
        res.data.forEach((item, i) => {
          if (i <= 2) {
          // 获取首页的三个公司
            this.workerList.push(res.data[i])
            // 实现首页公司图片的轮播
            this.workerImages = res.data[0].worker_photo
            return this.workerrList
          }
        })
      } catch (e) {
        this.$toast('获取月嫂信息失败')
      }
    }

  }

}
</script>

<style lang="scss" scoped>
.all {
  margin-top: 92px;
  margin-bottom: 150px;
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
  }
}
.van-nav-bar {
  background-color: #3f51b5;
}
::v-deep .van-nav-bar__text {
  color: white;
  font-size: 32px;
}
::v-deep .van-nav-bar__arrow {
  color: white;
}
.head {
  height: 346px;
  background-color: #3f51b5;
  position: relative;
  .swipe {
    width: 684px;
    height: 282px;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
.swipeimg {
  img {
    height: 282px;
    width: 684px;
  }
}
.content {
  margin-top: 36px;
  height: 374px;
  .van-grid {
    .van-grid-item {
      width: 212px;
      height: 174px;
    }
  }
}
::v-deep .van-icon-shop-o {
  color: black;
}
::v-deep .van-grid-item__content {
  background-color: #eeecec;
  border-radius: 10%;
}
::v-deep .dizhi {
  color: black;
}
.content2 {
  margin-top: 20px;
  height: 420px;
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 160px;
      height: 220px;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        // align-content: center;
        align-items: center;
        .radiu {
          img {
            width: 110px;
            height: 110px;
            border-radius: 50%;
          }
          // position: absolute;
          // left: 50%;
          // transform: translateX(-50%);
          width: 110px;
          height: 110px;

          border-radius: 50%;
        }
        span {
          margin-top: 10px;
          font-size: 25px;
        }
      }
    }
  }
}
.comment_list {
  display: flex;

  .touxiang {
    flex: 2;
    text-align: center;
    img {
      width: 172px;
      height: 160px;
    }
  }
  .youall {
    flex: 8;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 10px;
    padding-top: 0px;
    padding-bottom: 0;
    .nameicon {
      display: flex;
      justify-content: space-between;
    }
  }
}
.bottomcell {
  padding: 0;
}
.gengduo {
  font-size: 20px;
  text-align: center;
  color: #9f9c9c;
}
.skil {
  float: left;
  .peoplegrid {
    font-size: 24px;
    color: #7885cb;
    margin: 0 5px;
    border: solid #7885cb 1px;
    border-radius: 30px;
    padding: 10px 15px;
  }
}
.myself {
  font-size: 18px;
  color: #a7a2a2;
}
// 公司标签的样式
.company-tag {
  .van-tag {
    padding: 10px 20px;
    margin: 0 10px;
  }
}
</style>
