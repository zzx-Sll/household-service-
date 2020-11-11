<template>
  <div class="house-info">
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">

      <div class="companydesign">
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
      </div>
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
      finished: false,
      workerList: [],
      workerImages: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getFocusWoker()
  },
  mounted () {},
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < this.workerList.length; i++) {
          this.list.push(this.list.length + 1)
        }
        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 12) {
          this.finished = true
        }
      }, 1000)
    },
    async getFocusWoker () {
      const { data: res } = await this.$request.get('getAllWorker')
      res.data.forEach((item, i) => {
        this.workerList.push(res.data[i])
        this.workerImages = res.data[0].worker_photo
        return this.workerList
      })
      this.loading = false
      console.log(this.workerList)
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
