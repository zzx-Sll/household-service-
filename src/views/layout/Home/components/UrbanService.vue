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
                   v-for="(item,i) in 10"
                   :key="i"
                   class="skill"
                   color="#A7A2A2">月嫂</van-tag>
        </div>
      </van-cell>

      <van-cell title="星级标准">
        <div slot="label">
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   class="skill"
                   color="#A7A2A2">五星</van-tag>
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   class="skill"
                   color="#A7A2A2">四星</van-tag>
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   class="skill"
                   color="#A7A2A2">三星</van-tag>
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   class="skill"
                   color="#A7A2A2">二星</van-tag>
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   class="skill"
                   color="#A7A2A2">一星</van-tag>
          <van-tag size="medium"
                   round
                   type="primary"
                   plain
                   class="skill"
                   color="#A7A2A2">金牌</van-tag>
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
                color="#3F51B5">家政服务标准查询</van-button>
  </div>
</template>

<script>
import list from '../area'
export default {
  name: 'UrbanService',
  data () {
    return {
      areavalue: '',
      showArea: false,
      areaList: list
    }
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
</style>
