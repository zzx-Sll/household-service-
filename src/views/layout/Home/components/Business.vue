<template>
  <div>
    <van-nav-bar left-text="入驻商务部"
                 left-arrow
                 @click-left="onClickLeft"
                 class="navbar" />
    <div class="kard">
      <van-cell class="first">
        <div slot="title">
          <span class="bluebox">企业资料</span>
        </div>
      </van-cell>
      <van-form>
        <van-field readonly
                   clickable
                   label="法人类型"
                   :value="value"
                   placeholder="请选择法人类型"
                   @click="showPicker = true"
                   input-align="right" />
        <van-field v-model="Enterprisename"
                   label="企业名称:"
                   :rules="rule.name_company" />
        <van-field v-model="showname"
                   label="显示名字:"
                   :rules="rule.showname" />
        <van-field v-model="CreditCode"
                   label="社会信用代码:"
                   input-align="right"
                   placeholder="请输入统一的18位信用代码" />
        <van-field readonly
                   clickable
                   name="datetimePicker"
                   :value="timevalue"
                   label="注册时间"
                   placeholder="点击选择工商注册时间"
                   @click="timeshow = true"
                   input-align="right" />
        <van-field v-model="dollar"
                   label="注册资本:"
                   :rules="rule.money" />
        <van-field label="注册地区:"
                   readonly
                   clickable
                   name="area"
                   :value="areavalue"
                   placeholder="点击选择省市区"
                   @click="showArea = true"
                   input-align="right" />
        <van-field :value="typevalue"
                   readonly
                   clickable
                   label="企业类型:"
                   input-align="right"
                   placeholder="点击选择企业类型"
                   @click="showtype = true" />
        <!-- <van-field label="主营业务:" /> -->
        <van-cell title="主营业务">
          <div slot="label">
            <van-tag size="medium"
                     round
                     type="primary"
                     plain
                     v-for="(item,i) in 4"
                     :key="i"
                     class="skill"
                     color="#A7A2A2">月嫂</van-tag>
          </div>
        </van-cell>
      </van-form>
    </div>
    <!-- 法人选择器 -->
    <van-popup v-model="showPicker"
               round
               position="bottom">
      <van-picker show-toolbar
                  :columns="columns"
                  @cancel="showPicker = false"
                  @confirm="onConfirm" />
    </van-popup>
    <!-- 时间选择器 -->
    <van-popup v-model="timeshow"
               position="bottom">
      <van-datetime-picker type="date"
                           @confirm="timeonConfirm"
                           @cancel="timeshow = false"
                           :min-date="minDate"
                           :max-date="maxDate" />
    </van-popup>
    <!-- 地区选择器 -->
    <van-popup v-model="showArea"
               position="bottom">
      <van-area :area-list="areaList"
                @confirm="areaonConfirm"
                @cancel="showArea = false" />
    </van-popup>
    <!-- 企业类型选择器 -->
    <van-popup v-model="showtype"
               position="bottom">
      <van-picker show-toolbar
                  :columns="typedata"
                  @confirm="typeonConfirm"
                  @cancel="showPicker = false" />
    </van-popup>
    <!-- 固定定位下一步按钮 -->
    <van-button type="primary"
                class="next"
                size="large"
                color="#3F51B5">下一步</van-button>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import list from '../area'
export default {
  name: 'Buseniess',
  data () {
    return {
      Enterprisename: '',
      showname: '',
      CreditCode: '',
      dollar: '',
      text: '',
      // 法人数据
      value: '',
      showPicker: false,
      columns: ['企业法人', '机关法人', '社会团体法人', '事业单位法人', '法外狂徒'],
      // 时间数据
      minDate: new Date(1997, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      timevalue: '',
      timeshow: false,
      // 地区数据
      areavalue: '',
      showArea: false,
      areaList: list,
      // 企业类型数据
      typevalue: '',
      showtype: false,
      typedata: ['酱油型', '边缘ob型', '挂机划水型', '混日子型'],

      // 验证规则
      rule: {
        name_company: [{ required: true, message: '请填写企业名称' }],
        showname: [{ required: true, message: '请填写显示名称' }],
        money: [{ required: true, message: '请填写注册资本' }]
      }

    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onConfirm (value) {
      this.value = value
      this.showPicker = false
    },
    timeonConfirm (time) {
      time = dayjs(time).format('YYYY-MM-DD')
      this.timevalue = time
      console.log(time)
      this.timeshow = false
    },
    areaonConfirm (values) {
      this.areavalue = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    },
    typeonConfirm (val) {
      this.typevalue = val
      this.showtype = false
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
.kard {
  width: 704px;
  height: 1126px;
  position: absolute;
  top: 53%;
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
.next {
  position: fixed;
  bottom: 0;
}
</style>
