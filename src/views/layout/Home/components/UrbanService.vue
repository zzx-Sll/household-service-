<template>
  <div>
    <van-nav-bar left-text="家政服务标准"
                 left-arrow
                 @click-left="onClickLeft"
                 class="navbar" />
    <div class="card">
      <van-cell class="first">
        <div slot="title">
          <span class="bluebox">服务标准</span>
        </div>
      </van-cell>
      <van-field label="服务区域:"
                 readonly
                 clickable
                 name="area"
                 :value="areavalue"
                 placeholder="点击选择省市区"
                 @click="showArea = true"
                 input-align="right" />
      <van-cell title="服务类型">
        <div slot="label">
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   v-for="(item,i) in btype"
                   :key="i"
                   class="skill"
                   :color="item.active? '#A7A2A2':'red'"
                   @click="changecolor(item)">{{item.tp}}</van-tag>
        </div>
      </van-cell>

      <van-cell title="星级标准">
        <div slot="label">
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   class="skill"
                   color="#A7A2A2"
                   v-for="item2 in leveldata"
                   :key="item2.id"
                   @click="changelevel(item2.id)"
                   :class="{active : active == item2.id}">{{item2.level}}</van-tag>
        </div>
      </van-cell>
    </div>
    <!-- 地区选择器 -->
    <van-popup v-model="showArea"
               position="bottom">
      <van-area :area-list="areaList"
                @confirm="areaonConfirm"
                @cancel="showArea = false" />
    </van-popup>

    <van-button type="primary"
                class="selectdata"
                size="large"
                color="#3F51B5"
                @click="submitservicestandards">家政服务标准查询</van-button>
  </div>
</template>

<script>
import list from '../area'
export default {
  name: 'UrbanService',
  data () {
    return {
      surelist: [],
      btype: '',
      active: 0,
      areavalue: '',
      showArea: false,
      areaList: list,
      leveldata: [{ level: '一星', id: 1 }, { level: '二星', id: 2 }, { level: '三星', id: 3 }, { level: '四星', id: 4 }, { level: '五星', id: 5 }, { level: '金牌', id: 6 }]

    }
  },
  created () {
    this.getbusiness()
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    areaonConfirm (values) {
      this.areavalue = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    },
    async getbusiness () {
      const { data } = await this.$request.get('getBusinesstype')
      this.btype = data.data
      console.log(this.btype)
    },
    changecolor (item) {
      item.active = !item.active
      if (!item.active) {
        this.surelist.push(item)
      } else {
        // 从当前项删除此项
        // 找到当前项索引
        const i = this.surelist.indexOf(item)
        //  删除当前项
        this.surelist.splice(i, 1)
      }
      // console.log(this.surelist)
    },
    changelevel (itemid) {
      this.active = itemid
    },
    async submitservicestandards () {
      try {
        if (this.areavalue && this.surelist && this.active !== '' && []) {
          const { res } = await this.$request.post('servicestandards', {
            Servicearea: this.areavalue,
            // 服务类型
            Servicetype: this.surelist,
            // 服务星级
            Servicelevel: this.active
          })
          this.$toast('提交成功')
          console.log(res)
        } else {
          this.$toast('请填写全部')
        }
      } catch (err) {
        this.$toast('错误')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
  background-color: #3f51b5;
  height: 180px;
}
::v-deep .navbar {
  .van-nav-bar__arrow {
    color: white;
  }
  .van-nav-bar__text {
    color: white;
  }
}
.card {
  width: 704px;
  height: 900px;
  // background-color: red;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  font-size: 32px;
  .bluebox {
    padding-left: 20px;
    border-left: #3f51b5 solid 8px;
  }
  .van-cell {
    line-height: 70px;
  }
  .van-field {
    height: 96px;
  }
  .first {
    height: 110px;
  }
  .skill {
    margin: 10px;
  }
}
.selectdata {
  z-index: 1;
  position: fixed;
  bottom: 0;
}
::v-deep .active {
  color: red !important;
}
</style>
