<template>
  <div class="house-info">
    <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <div class="companydesign">

        <van-cell v-for="(data,i) in 6" :key="i">
          <div class="comment_list">
            <div class="touxiang">
              <img src="https://img.yzcdn.cn/vant/apple-1.jpg" alt="">

            </div>
            <div class="youall">
              <div class="nameicon">
                <div>五五开</div>
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
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>

  </div>
</template>

<script>
export default {
  name: 'HouseList',
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

<style scoped lang="scss">
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
</style>
