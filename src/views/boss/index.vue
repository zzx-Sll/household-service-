<template>
  <div class="nav">
    <div class="service-staffs">

      <!-- <div class="Housekeeping">家政平台</div> -->
      <!-- <span class="boot_sta">家政平台</span> -->
      <!-- <div class="service-staff">
        <van-search v-model="value" placeholder="智能匹配" class="search" right-icon="clear" /><span class="changsha">长沙</span>
        <div class="box">
          <van-icon name="arrow-down" size="10px" color="#D3D3D5" />
        </div>
      </div> -->

    </div>

    <div class="home">
      <div class="county-seat">区县</div>
      <div class="btn">
        <!-- <van-button round type="info" size="mini" color="none">市辖区</van-button>
        <van-button round type="info" size="mini" color="none">芙蓉区</van-button>
        <van-button round type="info" size="mini" color="none">天心区</van-button>
        <van-button round type="info" size="mini" color="none">岳麓区</van-button>
         -->
        <div class="box-rs">市辖区 </div>
        <div class="box-rs">芙蓉区 </div>
        <div class="box-rs">天心区 </div>
        <div class="box-rs">岳麓区 </div>

      </div>
      <div class="btn-one">
        <!-- <van-button round type="info" size="mini" color="none">开福区</van-button>
        <van-button round type="info" size="mini" color="none">雨花区</van-button>
        <van-button round type="info" size="mini" color="none">长沙县</van-button>
        <van-button round type="info" size="mini" color="none">望城县</van-button> -->
        <div class="box-rs">开福区 </div>
        <div class="box-rs">雨花区 </div>
        <div class="box-rs">长沙县 </div>
        <div class="box-rs">望城县 </div>

      </div>
      <div class="unfold">

        <!-- <van-button size="mini" class="btnn">展开</van-button> -->
        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>

      </div>
    </div>

    <div class="home">
      <div class="county-seat">职业类型</div>
      <div class="btn">
        <!-- <van-button round type="info" size="mini" color="none">全部职</van-button>
        <van-button round type="info" size="mini" color="none">月嫂</van-button>
        <van-button round type="info" size="mini" color="none">育婴师</van-button>
        <van-button round type="info" size="mini" color="none">保洁/清</van-button> -->
        <div class="box-rs">全部职 </div>
        <div class="box-rs">月嫂 </div>
        <div class="box-rs">育婴师 </div>
        <div class="box-rs">保洁/清 </div>

      </div>
      <div class="btn-one">
        <!-- <van-button round type="info" size="mini" color="none">保姆</van-button>
        <van-button round type="info" size="mini" color="none">产康师</van-button>
        <van-button round type="info" size="mini" color="none">早教/托</van-button>
        <van-button round type="info" size="mini" color="none">养老/陪</van-button> -->
        <div class="box-rs">保姆 </div>
        <div class="box-rs">产康师 </div>
        <div class="box-rs">早教/托 </div>
        <div class="box-rs">养老/陪 </div>

      </div>
      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">信用等级</div>
      <div class="btn Credit">

        <div class="nbas">

          <div class="nba">AAAA级</div>
          <div class="nba">AAAA级</div>

        </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">已认证客户服务数</div>
      <div class="btn Credit">

        <div class="nbas">

          <div class="nba">大于100人</div>
          <div class="nba">50-100</div>
          <div class="nba">30-50</div>
          <div class="nba">小于30人</div>

        </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>
    <div class="home">
      <div class="county-seat">职业类型</div>
    </div>
    <div class="ttrs">
      <div class="gook">500-1000人</div>
      <div class="gook">1000人以</div>
      <div class="gook">200人以</div>
      <div class="gook">200-500</div>
    </div>
    <div class="btn-puls">
      <van-button type="primary" size="large" class="vbs_btn" round>清除条件</van-button>
      <van-button type="primary" size="large" class="vbs_btn" round>确认筛选</van-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ServiceStaff',
  components: {},
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

<style scoped lang="scss">
// .service-staffs {
//   background-color: #354499;
//   height: 252px;
// }
.boot_sta {
  font-size: 30px;
  padding-left: 30px;
  color: #bcbfcd;
  font-weight: 600;
  background-color: #354499;
  display: block;
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
}
.county-seat {
  display: flex;
  flex-direction: row;
  margin: 15px 0 24px 0;
  font-size: 20px;
  color: #000;
}

.box-rs {
  flex: 1;
  width: 132px;
  height: 46px;
  border: solid 1px #979393;
  font-size: 22px;
  border-radius: 30px;
  margin: 0 15px;
  text-align: center;
  line-height: 46px;
  color: #a7a4a4;
}

.btn {
  margin-bottom: 28px;
  width: 100%;
  display: flex;

  /* button  盒子  */
}
button {
  flex: 1;
}
.btn-one {
  display: flex;
}
button {
  flex: 1;
}
.van-button__text {
  /* 文字颜色 */

  color: #979393;
}
.btn button {
  /* 按钮边框 */
  border: solid #979393 1px;
}
.btn-one button {
  border: solid #979393 1px;
  margin-bottom: 44px;
  width: 100%;

  /* 展开行 内边距  */
}

span {
  justify-content: center;
  align-items: center;
}
.unfold {
  width: 100%;
  height: 36px;
  text-align: center;
  line-height: 36px;
  margin-top: 20px;
  display: flex;

  /* 展开背景颜色 */
}
.btnn {
  color: #908c8c;
  margin: 0 auto;
  /* 展开背景颜色 */
  background-color: none;
  border: none;
  font-size: 20px;
  height: 36px;
  text-align: center;
}
.icoone {
  /* 图标大小 */
  height: 36px;

  /* align-items: center; */
  font-size: 13px;
  color: #979393;
}

/* //边框 距离*/
.van-button {
  margin: 0 20px;
}

/* 信用等级 */
.Credit {
  display: flex;
}
/* 4A级  */

.nbas {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 24px;
}
.nba {
  flex: 1;
  width: 140px;
  height: 50px;
  /* background-color: pink; */
  border-radius: 50px;
  font-size: 21px;
  text-align: center;
  line-height: 50px;
  margin-right: 26px;
  color: #979393;
  border: solid 1px #908c8c;
  overflow: hidden;
}
.tn-sty {
  width: 30%;
}

.ttrs {
  margin-left: 48px;
  display: flex;
}
/* 职业类型 */
.gook {
  border: solid 1px#908c8c;
  height: 46px;
  border-radius: 50px;
  font-size: 22px;
  padding: 2px 10px;
  margin-right: 20px;
  text-align: center;
  line-height: 46px;
  overflow: hidden;
  color: #979393;
  margin-bottom: 80px;
}

/* 底部按钮  */
.btn-puls {
  display: flex;
  margin-bottom: 30px;
}
.vbs_btn {
  background-color: #3f51b5;
  border: none;
  color: #fff;
}
.van-button__text {
  color: #fff;
}
</style>
