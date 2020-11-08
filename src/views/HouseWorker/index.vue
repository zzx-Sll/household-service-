<template>
  <div class="nav">
    <div class="service-staffs">

      <div class="Housekeeping">家政平台</div>
      <div class="service-staff">
        <van-search v-model="value" placeholder="智能匹配" class="search" right-icon="clear" /><span class="changsha">长沙</span>
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
      <house-list></house-list>
    </div>
  </div>
</template>

<script>
import HouseList from './components/house-info'
export default {
  name: 'HouseWorker',
  components: {
    HouseList
  },
  props: {},
  data () {
    return {
      value: ''
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.service-staffs {
  background-color: #354499;
  height: 252px;
}
.service-staff {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #354499;
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
</style>
