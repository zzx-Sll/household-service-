<template>
  <div class="nav">
    <div class="service-staffs">
    </div>

    <div class="home">
      <div class="county-seat">区县</div>
      <div class="btn">

        <div class="box-rs" :class="{active:currentIndex===index}" @click="change1(item,index)" v-for="(item,index) in countryList" :key="index">{{item.tp}} </div>

      </div>
      <div class="btn-one">
      </div>
      <div class="unfold">

        <div class="btnn">展开
          <van-icon name="arrow-down" class="icoone" />
        </div>

      </div>
    </div>

    <div class="home">
      <div class="county-seat">职业类型</div>
      <div class="btn">
        <div class="box-rs">全部职业 </div>
        <div class="box-rs" :class="{active:currentIndex1===index}" @click="change2(item,index)" v-for="(item,index) in professionList" :key="index">{{item.tp}} </div>

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

          <div class="nba" :class="{active:currentIndex2===index}" @click="change3(item,index)" v-for="(item,index) in creditList" :key="index">{{item.tp}}</div>

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

          <div class="nba" :class="{active:currentIndex3===index}" @click="change4(item,index)" v-for="(item,index) in certificationList" :key="index">{{item.tp}}</div>

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
      <div class="gook" :class="{active:currentIndex4===index}" @click="change5(item,index)" v-for="(item,index) in typeList" :key="index">{{item.tp}}</div>

    </div>
    <div class="btn-puls">
      <van-button type="primary" size="small" class="vbs_btn" round @click="clearAll">清除条件</van-button>
      <van-button type="primary" size="small" class="vbs_btn" round @click="onfirm">确认筛选</van-button>
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
      value: '',
      // 提交资料的列表
      want_list: [],
      want_list1: [],
      want_list2: [],
      want_list3: [],
      want_list4: [],
      // 区县列表
      countryList: [{ tp: '市辖区', active: false }, { tp: '芙蓉区', active: false }, { tp: '天心区', active: false }, { tp: '岳麓区', active: false }, { tp: '开福区', active: false }, { tp: '雨花区', active: false }, { tp: '长沙县', active: false }, { tp: '望城县', active: false }],
      // 当前激活索引
      currentIndex: null,
      currentIndex1: null,
      currentIndex2: null,
      currentIndex3: null,
      currentIndex4: null,
      currentIndex5: null,
      // 职业类型列表
      professionList: [{ tp: '月嫂', active: false }, { tp: '育婴师', active: false }, { tp: '保洁/清洁', active: false }, { tp: '保姆', active: false }, { tp: '产康师', active: false }, { tp: '早教/托管', active: false }, { tp: '养老/陪护', active: false }],
      // 信用等级列表
      creditList: [{ tp: 'AAAA', active: false }, { tp: 'AAAAA', active: false }],
      // 认证客户列表
      certificationList: [{ tp: '大于100人', active: false }, { tp: '50-100人', active: false }, { tp: '30-50人', active: false }, { tp: '小于30人', active: false }],
      // 公司类型列表
      typeList: [{ tp: '500-1000人', active: false }, { tp: '1000人以上', active: false }, { tp: '200人以下', active: false }, { tp: '200-500人', active: false }]
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    // 切换区县的函数
    change1 (item, index) {
      console.log(item, index)
      if (this.currentIndex === index) {
        this.currentIndex = null
        // 清空数组
        this.want_list = []
      } else {
        // 展示高亮颜色
        this.currentIndex = index
        // 清空数组
        this.want_list = []
        // 追加当前项
        this.want_list.push(item)
        console.log(this.want_list)
      }
    },
    change2 (item, index) {
      console.log(item, index)
      if (this.currentIndex1 === index) {
        this.currentIndex1 = null
        // 清空数组
        this.want_list1 = []
      } else {
        // 展示高亮颜色
        this.currentIndex1 = index
        // 清空数组
        this.want_list1 = []
        // 追加当前项
        this.want_list1.push(item)
        console.log(this.want_list1)
      }
    },
    change3 (item, index) {
      console.log(item, index)
      if (this.currentIndex2 === index) {
        this.currentIndex2 = null
        // 清空数组
        this.want_list2 = []
      } else {
        // 展示高亮颜色
        this.currentIndex2 = index
        // 清空数组
        this.want_list2 = []
        // 追加当前项
        this.want_list2.push(item)
        console.log(this.want_list2)
      }
    },
    change4 (item, index) {
      console.log(item, index)
      if (this.currentIndex3 === index) {
        this.currentIndex3 = null
        // 清空数组
        this.want_list3 = []
      } else {
        // 展示高亮颜色
        this.currentIndex3 = index
        // 清空数组
        this.want_list3 = []
        // 追加当前项
        this.want_list3.push(item)
        console.log(this.want_list3)
      }
    },
    change5 (item, index) {
      console.log(item, index)
      if (this.currentIndex4 === index) {
        this.currentIndex4 = null
        // 清空数组
        this.want_list4 = []
      } else {
        // 展示高亮颜色
        this.currentIndex4 = index
        // 清空数组
        this.want_list4 = []
        // 追加当前项
        this.want_list4.push(item)
        console.log(this.want_list)
      }
    },
    // 点击清除的函数
    clearAll () {
      this.currentIndex = null
      this.currentIndex1 = null
      this.currentIndex2 = null
      this.currentIndex3 = null
      this.currentIndex4 = null
      this.currentIndex5 = null
      this.want_list = []
      this.want_list1 = []
      this.want_list2 = []
      this.want_list3 = []
      this.want_list4 = []
    },
    // 点击提交的函数
    async onfirm () {
      const obj = {
        // 区县
        country: this.countryList[0],
        // 职业
        profression: this.professionList[0],
        // 信用等级：
        credit: this.creditList[0],
        // 认证客服
        certification: this.certificationList[0],
        // 职业类型
        type: this.typeList[0]
      }
      // 开启提示
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0

      })
      try {
        const res = await this.$request.post('HouseCompany', {
          params: obj
        })
        console.log(res)
        this.$toast.success('筛选成功')
        // 关闭弹出层
        this.$emit('closePorp')
      } catch (e) {
        this.$toast.fail('筛选失败')
      }
    }
  }
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

.btn {
  margin-bottom: 28px;
  width: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  .box-rs {
    // flex: 1;
    width: 132px;
    height: 46px;
    border: solid 1px #979393;
    font-size: 22px;
    border-radius: 30px;
    margin: 10px 15px;
    text-align: center;
    line-height: 46px;
    color: #a7a4a4;
  }

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
.active {
  color: #3f51b5 !important;
  border-color: #3f51b5 !important;
}
</style>
