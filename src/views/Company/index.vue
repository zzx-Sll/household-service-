<template>
  <div class="nav">
    <div class="service-staffs">
      <van-nav-bar left-text="家政平台" class="navbar" :border="false" />
      <!-- <div class="Housekeeping">家政平台</div> -->
      <div class="service-staff">
        <van-search v-model="value" placeholder="智能匹配" class="search" @click="showPopup" />
        <van-cell v-model="value" is-link class="search" style="display:none"></van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '81%', width:'100%' }">
          <!-- 家政公司弹出的路由出口 -->
          <service-staff @closePorp="close"></service-staff>
          <!-- 家政公司弹出的路由出口 -->
        </van-popup><span class="changsha">长沙</span>
        <div class="box">
          <van-icon name="arrow-down" size="10px" />
        </div>
      </div>

    </div>

    <div class="home">
      <div class="gekai"></div>
      <div class="btn">
        <van-button round type="info" size="mini" color="none">月嫂</van-button>
        <van-button round type="info" size="mini" color="none">保姆</van-button>
        <van-button round type="info" size="mini" color="none">育婴师</van-button>
        <van-button round type="info" size="mini" color="none">产康师</van-button>

      </div>
      <div class="btn-one">
        <van-button round type="info" size="mini" color="none">家装/搬家</van-button>
        <van-button round type="info" size="mini" color="none">早教/托育</van-button>
        <van-button round type="info" size="mini" color="none">养老/陪护</van-button>
      </div>
      <div class="btn-two">
        <van-button round type="info" size="mini" color="none">保洁/清洗</van-button>
        <van-button round type="info" size="mini" color="none">全部职业</van-button>
      </div>
    </div>
    <div class="thehoues">
      <company-list></company-list>
    </div>
  </div>
</template>

<script>
import ServiceStaff from '../boss/index'
import CompanyList from './components/company-list'
export default {
  name: 'Company',
  components: {
    CompanyList,
    ServiceStaff
  },
  props: {},
  data () {
    return {
      value: '',
      show: false
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    showPopup () {
      this.show = true
    },
    // 关闭弹出层
    close () {
      console.log(11)
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.service-staffs {
  background-color: #3f51b5;
  box-sizing: border-box;
  height: 252px;
}
.service-staff {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f51b5;
  padding-top: 92px;
}
.search {
  width: 85%;
  background-color: #d7d7d7;
}
.changsha {
  display: flex;
  flex-direction: row;
  font-size: 10px;
  color: #c1c4cf;
}
.van-search {
  background: none;
}
.Housekeeping {
  font-size: 20px;
  color: #fff;
  padding-left: 30px;
  padding-top: 100px;
  font-weight: 500px;
}
.van-field__control {
  color: #fff;
}
.box {
  width: 5%;

  margin-left: 5px;
}
.home {
  margin: 0 24px;
  background-color: #fff;
  margin-bottom: 60px;
}
.county-seat {
  margin: 15px 0 24px 0;
  font-size: 20px;
  color: #000;
}
.btn {
  margin-bottom: 20px;
  width: 100%;
  display: flex;
}
button {
  flex: 1;
}
.btn-one {
  display: flex;
  margin-bottom: 20px;
}
button {
  flex: 1;
}
.van-button__text {
  color: #979393;
}
.gekai {
  height: 25px;
}
.btn-two {
  display: flex;
}
.thehoues {
  position: relative;
}
.houseimg {
  position: absolute;
  left: 50px;
  top: 50px;
  width: 100px;
  height: 150px;
  background-color: #979393;
}
.van-nav-bar {
  background-color: #3f51b5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ::v-deep .van-nav-bar__left {
    .van-nav-bar__text {
      color: #fff;
      font-size: 32px;
    }
  }
}
</style>
