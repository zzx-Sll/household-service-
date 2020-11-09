<template>
  <div class="contact">

     <!-- 导航栏 -->
    <van-nav-bar left-text="已联系家政人员"
                 :border="false"
                 left-arrow
                 @click-left="$router.back()"
                 class="contact-nav-bar" />

    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="companydesign">

        <van-cell v-for="(data,i) in 6" :key="i">
          <div class="comment_list">
            <div class="touxiang">
              <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">

            </div>
            <div class="youall">
              <div class="nameicon">
                <div>陈佳</div>
                <div>13800138000</div>
              </div>
              <div class="skil">
                <span class="peoplegrid">二星育婴师</span>
                <span class="peoplegrid">6年老师傅</span>

              </div>
              <div class="myself"><span>湖南前海优家网络科技有限公司</span></div>

            </div>
          </div>
        </van-cell>

      </div>
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>

  </div>

</template>
<script>
export default {
  name: 'Contact',
  components: {},
  props: {
    articleId: {
      type: [],
      required: ''
    }
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // for (let i = 0; i < 10; i++) {
        //   this.list.push(this.list.length + 1)
        // }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: #f8f8f8;
}
.contact-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #3f51b5;
    height: 130px;
    ::v-deep .van-nav-bar__left {
      .van-icon-arrow-left,
      .van-nav-bar__text {
        color: #fff;
        font-size: 30px;
      }
    }
  }
  .companydesign{
    padding-top: 130px;
  }
.nav {
  // 头部 背景颜色
  height: 100px;
  background-color: pink;
  font-size: 32px;
  line-height: 100px;
  color: #fff;
  font-weight: 700;
  background-color: #3f51b5;
  .icone {
    position: relative;
    top: 14px;
    left: 10px;
    font-size: 50px;
    color: #fff;
  }
  .left-tq {
    width: 100%;
    height: 116px;
    background-color: #3f51b5;
  }
}

.left {
  display: flex;

  box-sizing: border-box;
  padding-top: 32px;
  height: 232px;
  background-color: red;
  .zhaopian {
    width: 160px;
    height: 160px;
    background-color: chartreuse;
  }
  .left-chen {
    font-size: 30px;

    margin-right: 10px;
  }
  .chenjia {
    margin-right: 300px;
    margin-left: 10px;
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
.van-cell {
  margin-bottom: 10px;
}
</style>
