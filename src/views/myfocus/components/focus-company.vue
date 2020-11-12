<template>
  <div class="company-info">
    <van-list v-model="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad">
      <!-- 公司中 -->
      <div class="companydesign">
        <!-- 公司简介 -->
        <van-cell v-for="(item,index) in companyList"
                  :key="item.id"
                  @click="$router.push(`/CompanyDetails/${item.id}`)">
          <div class="comment_list">
            <div class="touxiang">
              <img :src="item.photo[index]"
                   alt="">
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

      </div>
    </van-list>

  </div>
</template>

<script>
export default {
  name: 'CompanyList',
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
      companyList: []
    }
  },
  computed: {},
  watch: {},
  created () {
    this.getMyFocusCompany()
  },
  mounted () {},
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < this.companyList.length; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = true

        // 数据全部加载完成
        if (this.list.length >= this.companyList.length) {
          this.finished = true
        }
      }, 1000)
    },
    async getMyFocusCompany () {
      const { data: res } = await this.$request.get('getCompanys')
      res.data.forEach((item, i) => {
        this.companyList.push(res.data[i])
        return this.companyList
      })
      this.loading = false
      console.log(this.companyList)
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
