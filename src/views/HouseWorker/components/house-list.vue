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
      <div class="county-seat">职业类型</div>
      <div class="btn">
        <!-- <van-button round type="info" size="mini" color="none">市辖区</van-button>
        <van-button round type="info" size="mini" color="none">芙蓉区</van-button>
        <van-button round type="info" size="mini" color="none">天心区</van-button>
        <van-button round type="info" size="mini" color="none">岳麓区</van-button>
         -->
        <div class="box-rs">全部职业 </div>
        <div class="box-rs">月嫂 </div>
        <div class="box-rs">育婴师 </div>
        <div class="box-rs">保洁/清 </div>

      </div>
      <div class="btn-one">
        <!-- <van-button round type="info" size="mini" color="none">开福区</van-button>
        <van-button round type="info" size="mini" color="none">雨花区</van-button>
        <van-button round type="info" size="mini" color="none">长沙县</van-button>
        <van-button round type="info" size="mini" color="none">望城县</van-button> -->
        <div class="box-rs">保姆 </div>
        <div class="box-rs">产康师 </div>
        <div class="box-rs">早教/托 </div>
        <div class="box-rs">养老/陪 </div>

      </div>
      <div class="unfold">

        <!-- <van-button size="mini" class="btnn">展开</van-button> -->
        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>

      </div>
    </div>

    <div class="home">
      <div class="county-seat">学历型</div>
      <div class="btn">
        <!-- <van-button round type="info" size="mini" color="none">全部职</van-button>
        <van-button round type="info" size="mini" color="none">月嫂</van-button>
        <van-button round type="info" size="mini" color="none">育婴师</van-button>
        <van-button round type="info" size="mini" color="none">保洁/清</van-button> -->
        <div class="box-rs">小学 </div>
        <div class="box-rs">初中 </div>
        <div class="box-rs">中专 </div>
        <div class="box-rs">职高 </div>

      </div>
      <div class="btn-one">
        <!-- <van-button round type="info" size="mini" color="none">保姆</van-button>
        <van-button round type="info" size="mini" color="none">产康师</van-button>
        <van-button round type="info" size="mini" color="none">早教/托</van-button>
        <van-button round type="info" size="mini" color="none">养老/陪</van-button> -->
        <div class="box-rs">高中 </div>
        <div class="box-rs">大专 </div>
        <div class="box-rs">本科 </div>
        <div class="box-rs">研究生及以上 </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>
    <div class="home">
      <div class="county-seat">民族</div>
      <div class="btn">
        <!-- <van-button round type="info" size="mini" color="none">全部职</van-button>
        <van-button round type="info" size="mini" color="none">月嫂</van-button>
        <van-button round type="info" size="mini" color="none">育婴师</van-button>
        <van-button round type="info" size="mini" color="none">保洁/清</van-button> -->
        <div class="box-rs">汉族 </div>
        <div class="box-rs">蒙古族 </div>
        <div class="box-rs">回族 </div>
        <div class="box-rs">藏族 </div>

      </div>
      <div class="btn-one">
        <!-- <van-button round type="info" size="mini" color="none">保姆</van-button>
        <van-button round type="info" size="mini" color="none">产康师</van-button>
        <van-button round type="info" size="mini" color="none">早教/托</van-button>
        <van-button round type="info" size="mini" color="none">养老/陪</van-button> -->
        <div class="box-rs">维吾尔族 </div>
        <div class="box-rs">苗族 </div>
        <div class="box-rs">彝族 </div>
        <div class="box-rs">壮族 </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">婚姻状况</div>
      <div class="btn Credit">

        <div class="btn">

          <div class="box-rs">未婚 </div>
          <div class="box-rs">已婚 </div>
          <div class="box-rs">离异 </div>
          <div class="box-rs">丧偶 </div>

        </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">星座</div>
      <div class="btn Credit">

        <div class="nbas">

          <div class="nba">白羊座（3.21~4.20）</div>
          <div class="nba">金牛座（4.20~5.20）</div>

        </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>
    <div class="home">
      <div class="county-seat">生肖</div>
    </div>
    <div class="ttrs">
      <div class="box-rs">鼠</div>
      <div class="box-rs">牛</div>
      <div class="box-rs">狗</div>
      <div class="box-rs">猪</div>
    </div>
    <div class="unfold">

      <div class="btnn">展开
        <van-icon name="arrow-down" class="icoone" />
      </div>
    </div>
    <div class="home">
      <div class="county-seat">工作年限</div>
      <div class="btn">
        <!-- <van-button round type="info" size="mini" color="none">全部职</van-button>
        <van-button round type="info" size="mini" color="none">月嫂</van-button>
        <van-button round type="info" size="mini" color="none">育婴师</van-button>
        <van-button round type="info" size="mini" color="none">保洁/清</van-button> -->
        <div class="box-rs">1年 </div>
        <div class="box-rs">2年 </div>
        <div class="box-rs">3年 </div>
        <div class="box-rs">4年 </div>

      </div>
      <div class="btn-one">
        <!-- <van-button round type="info" size="mini" color="none">保姆</van-button>
        <van-button round type="info" size="mini" color="none">产康师</van-button>
        <van-button round type="info" size="mini" color="none">早教/托</van-button>
        <van-button round type="info" size="mini" color="none">养老/陪</van-button> -->
        <div class="box-rs">5年 </div>
        <div class="box-rs">6年 </div>
        <div class="box-rs">7年 </div>
        <div class="box-rs">8年 </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">主要技能</div>
      <div class="btn">
        <!-- <van-button round type="info" size="mini" color="none">全部职</van-button>
        <van-button round type="info" size="mini" color="none">月嫂</van-button>
        <van-button round type="info" size="mini" color="none">育婴师</van-button>
        <van-button round type="info" size="mini" color="none">保洁/清</van-button> -->
        <div class="box-rs">做 </div>
        <div class="box-rs">催 </div>
        <div class="box-rs">产后护理 </div>
        <div class="box-rs">月子餐 </div>

      </div>
      <div class="btn-one">
        <!-- <van-button round type="info" size="mini" color="none">保姆</van-button>
        <van-button round type="info" size="mini" color="none">产康师</van-button>
        <van-button round type="info" size="mini" color="none">早教/托</van-button>
        <van-button round type="info" size="mini" color="none">养老/陪</van-button> -->
        <div class="box-rs">家庭保洁 </div>
        <div class="box-rs">洗 </div>
        <div class="box-rs">育婴护 </div>
        <div class="box-rs">小儿推拿 </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>
      </div>
    </div>
    <div class="btn-puls">
      <van-button type="primary" size="small" class="vbs_btn" round>清除条件</van-button>
      <van-button type="primary" size="small" class="vbs_btn" round>确认筛选</van-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HouseInfo',
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
  margin-top: 40px;
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
