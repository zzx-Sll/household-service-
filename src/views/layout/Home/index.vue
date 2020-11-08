<template>
  <div class="all">
    <van-nav-bar left-text="家政平台"
                 left-arrow
                 @click-left="onClickLeft"
                 class="navbar" />

    <div class="head">
      <!-- 上轮播图 -->
      <div class="swipe">
        <van-swipe :autoplay="3000"
                   class="swipeimg">
          <van-swipe-item v-for="(image, index) in images"
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
        <van-grid-item v-for="value in 6"
                       :key="value"
                       text="文字" />
      </van-grid>
    </div>

    <!-- 服务项目 -->
    <div class="content2">
      <ul>
        <li v-for="(item,index) in 8"
            :key="index">
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- 公司中 -->
    <div class="companydesign">
      <van-cell icon="shop-o"
                size="large">
        <div slot="title">湖南家信认证家服公司</div>
      </van-cell>

      <van-cell v-for="(data,i) in 3"
                :key="i">
        <div class="comment_list">
          <div class="touxiang">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg"
                 alt="">
            <div>
              <van-icon name="location"
                        class="dizhi" />10000km
            </div>
          </div>
          <div class="youall">
            <div class="nameicon">
              <div>公司名称</div>
            </div>
            <div>评价</div>
            <div>标签</div>
            <div>具体地址</div>
          </div>
        </div>
      </van-cell>
      <div class="gengduo">更多公司
        <van-icon name="arrow" />
      </div>
    </div>

    <!-- 服务人员详情 -->
    <div class="companydesign">
      <van-cell icon="manager"
                size="large">
        <div slot="title">诚信注册家服员</div>
      </van-cell>

      <van-cell v-for="(data,i) in 3"
                :key="i">
        <div class="comment_list">
          <div class="touxiang">
            <img src="https://img.yzcdn.cn/vant/apple-1.jpg"
                 alt="">

          </div>
          <div class="youall">
            <div class="nameicon">
              <div>卢本伟</div>
              <div>8000元/26天</div>
            </div>
            <div class="skil">
              <span class="peoplegrid">八倍sks</span>
              <span class="peoplegrid">10年老师傅</span>

            </div>
            <div class="myself"><span>长沙</span> | <span>18岁</span> | <span>干了18次</span> | <span>9条评价</span></div>

          </div>
        </div>
      </van-cell>
      <div class="gengduo">更多家服员
        <van-icon name="arrow" />
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.$toast('返回')
    }

  }
}
</script>

<style lang="scss" scoped>
.all {
  margin-top: 92px;
  margin-bottom: 110px;
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
          // position: absolute;
          // left: 50%;
          // transform: translateX(-50%);
          width: 110px;
          height: 110px;
          background-color: red;
          border-radius: 50%;
        }
        span {
          font-size: 40px;
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
    font-size: 28px;
    color: #7885cb;
    margin: 0 5px;
    border: solid #7885cb 1px;
    border-radius: 20px;
    padding: 10px;
  }
}
.myself {
  font-size: 18px;
  color: #a7a2a2;
}
</style>
