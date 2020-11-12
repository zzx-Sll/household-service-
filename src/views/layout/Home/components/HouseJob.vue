<template>
  <div class="House-Job">
    <!-- 月嫂详情页的导航栏  -->
    <van-nav-bar class="login-navbar" left-text="家政求职" left-arrow @click-left="$router.back()" />
    <!-- 月嫂详情页的导航栏  -->
    <div class="do-houseWorke">
      <ul class="border">
        <li><span>做家政</span></li>
      </ul>
      <!-- 求职意向表单  -->
      <van-form @submit="onSubmit">
        <!-- 姓名框 -->
        <van-field v-model="user_name" name="user_name" label="* 姓名 :" :rules="[{ required: true, message: '请填写用户名' }]" />
        <!-- 姓名框 -->

        <!-- 手机框 -->
        <van-field v-model="phone" name="mobile" type="number" label="* 手机号码 :" :rules="mobile" />
        <!-- 手机框 -->

        <!-- 意向岗位 -->
        <!-- <van-cell-group> -->
        <van-cell title="* 意向岗位 ：">
          <template #label>
            <div class="intention-job">
              <van-tag class="intention-tag" plain round type="primary" v-for="(item,index) in busineestype" :color="item.active? '#3f51b5' :'#A7A2A2'" :key="index" @click="changecolor(item)">{{item.tp}}</van-tag>
            </div>
          </template>
        </van-cell>
        <!-- </van-cell-group> -->
        <!-- 意向岗位 -->

        <!-- 已获证书 -->
        <van-cell-group>
          <van-cell title="* 已获证书 ：">
            <template #label>
              <div class="certificate ">
                <van-tag @click="changeCert(item)" v-for="(item,index) in certificate_list" :key="index" class="certificate-tag" :certificate_active="certificate_active" :color='item.active?"#3f51b5" :"#9f9a9a"' plain round type="primary">{{item.tp}}</van-tag>

              </div>
            </template>
          </van-cell>
        </van-cell-group>
        <!-- 已获证书 -->

        <!-- 籍贯  -->
        <van-field v-model="native_place" name="native_place" label="籍贯 :" />
        <!-- 籍贯  -->

        <!-- 现居住地  -->
        <van-field v-model="now_place" name="now_place" label="现居住地 :" />
        <!-- 现居住地  -->

        <!-- 意向家政公司  -->
        <van-cell-group>
          <van-cell title="意向家政公司 ：">
            <span @click="isShowCompanyProp=true">{{intention_company}} </span>
            <span @click="isShowCompanyProp=true">
              请选择
              <van-icon name="arrow-down" />
            </span>

          </van-cell>
        </van-cell-group>
        <!-- 意向家政公司  -->

        <!-- 备注信息  -->
        <van-field v-model="note_info" name="note_info" label="备注信息 :" />
        <!-- 备注信息  -->

        <!-- 提交按钮 -->
        <div style="margin: 16px;">
          <van-button class="sub-btn" block native-type="submit">
            提交资料
          </van-button>
        </div>
      </van-form>
      <!-- 求职意向表单  -->

      <!-- 选择意向公司的弹出层 -->
      <van-popup v-model="isShowCompanyProp" position="bottom">
        <!-- 选择框  -->
        <van-picker title="标题" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="isShowCompanyProp=false" />
        <!-- 选择框  -->
      </van-popup>
      <!-- 选择意向公司的弹出层 -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HouseJob',
  data () {
    return {
      // 填写的用户名
      busineestype: [{ tp: '月嫂', active: false }, { tp: '保姆', active: false }, { tp: '育婴师', active: false }, { tp: '产康师', active: false }, { tp: '家装/搬家', active: false }, { tp: '早教/托育', active: false }, { tp: '养老/陪护', active: false }, { tp: '保洁/清洗', active: false }],
      // 姓名
      user_name: '',
      // 需要提交的意向岗位list
      want_list: [],
      // 填写的手机号
      phone: null,
      // 定义手机号的验证规则
      mobile: [{ required: true, message: '请填写手机号' }, { pattern: /^1[3|5|7|8]\d{9}$/, message: '请填写合法的手机号' }],
      // 籍贯信息
      native_place: '',
      // 现居地
      now_place: '',
      // 意向家政公司
      intention_company: '',
      // 显示与隐藏选择公司的弹出层
      isShowCompanyProp: false,
      // 求职意向公司
      columns: ['长沙公司一号', '长沙公司二号', '长沙公司三号', '长沙公司四号', '长沙公司五号', '长沙公司六号', '长沙公司七号'],
      // 已获证书列表
      certificate_list: [{ tp: '月嫂', active: false }, { tp: '育婴师', active: false }, { tp: '小儿推拿', active: false }, { tp: '保姆', active: false }, { tp: '保育员证', active: false }],
      // 需要提交的证书列表
      want_cert_list: [],
      // 证书激活状态
      certificate_active: false,
      // 备注信息
      note_info: ''
    }
  },
  methods: {
    // 信息提交函数
    async onSubmit () {
      // 开启提示
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0

      })
      try {
        const res = await this.$request.post('HouseJob', {
          params: {
            user_name: this.user_name,
            phone: this.phone,
            want_list: this.want_list,
            want_cert_list: this.want_cert_list,
            native_place: this.native_place,
            now_place: this.now_place,
            intention_company: this.intention_company,
            note_info: this.note_info

          }

        })
        // 成功提示
        this.$toast.success('提交成功')
        // 跳转到首页
        this.$router.push('/Home')
        console.log(res)
      } catch (e) {
        this.$toast.fail('提交失败')
      }
    },
    // 确认选择公司的函数
    onConfirm (value, index) {
      console.log(value, index)
      this.intention_company = value
      this.isShowCompanyProp = false
    },
    changecolor (item) {
      // console.log(item, index)
      // 取反状态
      item.active = !item.active
      // 进行判断，如果当前是激活状态，则从当前数组中添加当前项
      if (item.active) {
        this.want_list.push(item)
      } else {
        // 从当前项删除此项
        // 找到当前项索引
        const i = this.want_list.indexOf(item)
        //  删除当前项
        this.want_list.splice(i, 1)
        // console.log(this.want_list, i)
      }
    },
    changeCert (item) {
      // console.log(item, index)
      // 取反状态
      item.active = !item.active
      // 进行判断，如果当前是激活状态，则从当前数组中添加当前项
      if (item.active) {
        this.want_cert_list.push(item)
      } else {
        // 从当前项删除此项
        // 找到当前项索引
        const i = this.want_cert_list.indexOf(item)
        //  删除当前项
        this.want_cert_list.splice(i, 1)
        console.log(this.want_cert_list, i)
      }
    }

  }
}
</script>

<style lang="scss" scoped>
.House-Job {
  height: 89vh;
  overflow-y: auto;
  position: relative;
  padding-bottom: 164px;
  left: 0;
  // 顶部导航栏
  .login-navbar {
    background-color: #3f51b5;
    height: 180px;
  }
  // 顶部导航栏
  //做家政表单
  .do-houseWorke {
    z-index: 2;
    box-sizing: border-box;
    position: absolute;
    top: 140px;
    padding: 20px 0;
    width: 684px;
    margin: 0 30px;
    // margin-top: 450px;
    height: 110px;
    border-radius: 10px;
    background-color: #fff;
    .border {
      li {
        margin: 15px 10px;
        padding: 10px 15px;
        // border-left: 3px solid green;
        font-size: 33px;
        // border-bottom: 1px solid #f0eeee;
        span {
          border-left: 10px solid #3f51b5;
          padding: 0 15px;
        }
      }
    }
    // 求职意向开始
    .intention-job,
    .certificate {
      .intention-tag,
      .certificate-tag {
        padding: 5px 20px;
        margin: 10px;
      }
    }
    .sub-btn {
      background-color: #3f51b5;
      color: #fff;
    }
    // 求职意向结束
  }
}
::v-deep .van-icon-arrow-left::before {
  color: #fff;
}
::v-deep .van-nav-bar__title {
  color: #fff;
}
.login-btn {
  color: #fff;
  background-color: #3f51b5;
}
::v-deep .van-nav-bar__text {
  color: #ffffff;
}
</style>
