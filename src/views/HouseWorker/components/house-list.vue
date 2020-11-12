<template>
  <div class="nav">
    <div class="service-staffs">

    </div>

    <div class="home">
      <div class="county-seat">职业类型</div>
      <div class="btn">
        <div class="box-rs"
             v-for="(v,i) in occupationList"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>
      </div>
      <div class="btn-one">
        <div class="box-rs"
             v-for="(v,i) in occupationList1"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>
      </div>
      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down"
                    class="icoone" />
        </div>

      </div>
    </div>

    <div class="home">
      <div class="county-seat">学历型</div>
      <div class="btn">
        <div class="box-rs"
             v-for="(v,i) in educationList"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>
      </div>
      <div class="btn-one">
        <div class="box-rs"
             v-for="(v,i) in educationList1"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down"
                    class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">民族</div>
      <div class="btn">
        <div class="box-rs"
             v-for="(v,i) in FamilyList"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>

      </div>
      <div class="btn-one">
        <div class="box-rs"
             v-for="(v,i) in FamilyList1"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>
      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down"
                    class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">婚姻状况</div>
      <div class="btn Credit">

        <div class="btn">

          <div class="box-rs"
               v-for="(v,i) in marriageList"
               :key="i"
               @click="isShowClass(v,i)"
               :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>

        </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down"
                    class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">星座</div>
      <div class="btn Credit">

        <div class="nbas">
          <div class="nba"
               v-for="(v,i) in signList"
               :key="i"
               :class="[v.active ? 'highlight' : '']"
               @click="isShowClass(v,i)">{{v.tp}}</div>
        </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down"
                    class="icoone" />
        </div>
      </div>
    </div>
    <div class="home">
      <div class="county-seat">生肖</div>
    </div>
    <div class="ttrs">
      <div class="box-rs"
           v-for="(v,i) in ZodiacList"
           :key="i"
           @click="isShowClass(v,i)"
           :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>
    </div>
    <div class="unfold">

      <div class="btnn">展开
        <van-icon name="arrow-down"
                  class="icoone" />
      </div>
    </div>
    <div class="home">
      <div class="county-seat">工作年限</div>
      <div class="btn">
        <div class="box-rs"
             v-for="(v,i) in duration"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>

      </div>
      <div class="btn-one">
        <div class="box-rs"
             v-for="(v,i) in duration1"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down"
                    class="icoone" />
        </div>
      </div>
    </div>

    <div class="home">
      <div class="county-seat">主要技能</div>
      <div class="btn">

        <div class="box-rs"
             v-for="(v,i) in skill"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>

      </div>
      <div class="btn-one">
        <div class="box-rs"
             v-for="(v,i) in skill1"
             :key="i"
             @click="isShowClass(v,i)"
             :class="[v.active ? 'highlight' : '']">{{v.tp}} </div>

      </div>

      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down"
                    class="icoone" />
        </div>
      </div>
    </div>
    <div class="btn-puls">
      <van-button type="primary"
                  size="small"
                  class="vbs_btn"
                  @click="allactive"
                  round>清除条件</van-button>
      <van-button type="primary"
                  size="small"
                  class="vbs_btn"
                  @click="confirmationScreen"
                  round>确认筛选</van-button>
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
      value: '',
      occupationList: [{ tp: '全部职业', active: false }, { tp: '月嫂', active: false }, { tp: '育婴师', active: false }, { tp: '保洁/清', active: false }],
      occupationList1: [{ tp: '保姆', active: false }, { tp: '产康师', active: false }, { tp: '早教/托', active: false }, { tp: '养老/陪', active: false }],
      educationList: [{ tp: '小学', active: false }, { tp: '初中', active: false }, { tp: '中专', active: false }, { tp: '职高', active: false }],
      educationList1: [{ tp: '高中', active: false }, { tp: '大专', active: false }, { tp: '本科', active: false }, { tp: '研究生以上', active: false }],
      FamilyList: [{ tp: '汉族', active: false }, { tp: '蒙古族', active: false }, { tp: '回族', active: false }, { tp: '维吾尔族', active: false }],
      FamilyList1: [{ tp: '苗族', active: false }, { tp: '彝族', active: false }, { tp: '壮族', active: false }, { tp: '藏族', active: false }],
      marriageList: [{ tp: '未婚', active: false }, { tp: '已婚', active: false }, { tp: '离异', active: false }, { tp: '丧偶', active: false }],
      signList: [{ tp: '白羊座（3.21~4.20）', active: false }, { tp: '狮子座（3.21~4.20）', active: false }, { tp: '天蝎座（3.21~4.20）', active: false }, { tp: '金牛座（4.20~5.20）', active: false }],
      ZodiacList: [{ tp: '鼠', active: false }, { tp: '牛', active: false }, { tp: '狗', active: false }, { tp: '猪', active: false }],
      duration: [{ tp: '1年', active: false }, { tp: '2年', active: false }, { tp: '3年', active: false }, { tp: '4年', active: false }],
      duration1: [{ tp: '5年', active: false }, { tp: '6年', active: false }, { tp: '7年', active: false }, { tp: '8年', active: false }],
      skill: [{ tp: '做', active: false }, { tp: '催', active: false }, { tp: '产后护理', active: false }, { tp: '月子餐', active: false }],
      skill1: [{ tp: '家庭保洁', active: false }, { tp: '洗', active: false }, { tp: '育婴护', active: false }, { tp: '小儿推拿', active: false }]

    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    isShowClass (v) {
      v.active = !v.active
    },
    allactive () {
      for (let i = 0; i < 4; i++) {
        this.occupationList[i].active = false
        this.occupationList1[i].active = false
        this.educationList[i].active = false
        this.educationList1[i].active = false
        this.FamilyList[i].active = false
        this.FamilyList1[i].active = false
        this.marriageList[i].active = false
        this.ZodiacList[i].active = false
        this.signList[i].active = false
        this.duration[i].active = false
        this.duration1[i].active = false
        this.skill[i].active = false
        this.skill1[i].active = false
      }
    },
    confirmationScreen () {
      this.$toast.success('筛选成功')
      this.$emit('close', false)
    }
  }
}
</script>

<style scoped lang="scss">
.home,
.ttrs {
  .highlight {
    color: #3f51b5;
    border: 2px solid #3f51b5;
  }
}

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
  margin-left: 22px;
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
