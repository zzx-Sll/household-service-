<template>
  <div>
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
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>

          </div>
        </li>
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>

          </div>
        </li>
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>
          </div>
        </li>
        <li>
          <div class="box">
            <div class="radiu"></div>
            <span>nihao</span>
          </div>
        </li>
      </ul>
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

  }
}
</script>

<style lang="scss" scoped>
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
::v-deep .van-grid-item__content {
  background-color: #eeecec;
  border-radius: 10%;
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
</style>
