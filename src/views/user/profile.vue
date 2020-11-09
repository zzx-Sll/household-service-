<template>
  <div class="user">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar"
                 left-text="个人资料"
                 left-arrow
                 @click-left="$router.back()" />
    <!-- /导航栏 -->
    <input type="file"
           hidden
           ref="file"
           @change="onFileChange">
    <!-- 个人信息 -->
    <van-cell size="large"
              class="photo-cell"
              title="头像"
              is-link
              center
              @click="$refs.file.click()">
      <van-image class="avatar"
                 src="https://img.yzcdn.cn/vant/cat.jpeg"
                 fit="cover"
                 round
                 width="55px"
                 height="55px">
        <template v-slot:loading>
          <van-loading type="spinner"
                       size="20" />
        </template>
      </van-image>
    </van-cell>
    <van-cell size="large"
              title="昵称:"
              is-link
              @click="isUpdateNameShow = true"
              :value="user.username" />
    <van-cell size="large"
              title="性别:"
              is-link
              @click="isUpdateGenderShow = true"
              :value="user.gender === 0 ? '男' : '女'" />
    <van-cell size="large"
              title="手机号码:"
              :value="13811111111"
              is-link
              @click="isUpdatePhoneShow = true" />
    <van-cell size="large"
              title="服务区域:"
              :value="'湖南省长沙市'"
              is-link
              @click="isUpdateServiceShow = true" />
    <van-cell size="large"
              title="详细地址:"
              is-link
              @click="isUpdateAddressShow = true"
              :value="'五一广场'" />
    <van-field label="手机验证码:"
               name="code"
               placeholder="请输入验证码"
               type="number"
               maxlength="6">
      <i slot="left-icon"
         class="iconfont iconyanzhengma"></i>

      <!-- <van-count-down :time="1000 * 60" format="ss s" v-if="isCountDown" @finish="isCountDown = false" /> -->
      <template #button>
        <van-count-down :time="1000 * 60"
                        format="ss s"
                        v-if="isCountDown"
                        @finish="isCountDown = false" />
        <van-button round
                    class="send-sms-btn"
                    size="small"
                    type="default"
                    native-type="button"
                    @click="onSendSms"
                    v-else>获取验证码</van-button>
      </template>
    </van-field>
    <van-button class="save"
                @click="SaveUserMessage">保存</van-button>

    <!-- 个人信息 -->
    <!-- 弹层 -->
    <!-- 编辑头像 -->
    <van-popup v-model="isUpdatePhotoShow"
               position="bottom"
               style="height: 100%;">
      <update-photo v-if="isUpdatePhotoShow"
                    :img="img" />
    </van-popup>
    <!-- /编辑头像 -->
    <!-- 编辑昵称 -->
    <van-popup v-model="isUpdateNameShow"
               style="height: 100%;"
               position="bottom">
      <update-name v-if="isUpdateNameShow"
                   :user="user"
                   @updata-name="user.username = $event"
                   @close="isUpdateNameShow = false" />
    </van-popup>
    <!-- /编辑昵称 -->

    <!-- 编辑性别 -->
    <van-popup v-model="isUpdateGenderShow"
               style="height: 100%;"
               position="bottom">
      <update-gender v-if="isUpdateGenderShow"
                     v-model="user.gender"
                     @close="isUpdateGenderShow = false" />
    </van-popup>
    <!-- /编辑性别 -->
    <!-- 编辑手机 -->
    <van-popup v-model="isUpdatePhoneShow"
               style="height: 100%;"
               position="bottom">
      <update-phone v-if="isUpdatePhoneShow"
                    v-model="user.phone"
                    @close="isUpdatePhoneShow = false" />
    </van-popup>
    <!-- /编辑手机 -->
    <!-- 编辑详细地址 -->
    <van-popup v-model="isUpdateAddressShow"
               style="height: 100%;"
               position="bottom">
      <update-address v-if="isUpdateAddressShow"
                      v-model="user.address"
                      @close="isUpdateAddressShow = false" />
    </van-popup>
    <!-- /编辑详细地址 -->
    <!-- 编服务地址 -->
    <van-popup v-model="isUpdateServiceShow"
               style="height: 100%;"
               position="bottom">
      <update-service v-if="isUpdateServiceShow"
                      v-model="user.service"
                      @close="isUpdateServiceShow = false" />
    </van-popup>
    <!-- /编辑服务地址 -->

  </div>
</template>

<script>
import UpdateGender from './components/update-gender'
import UpdateName from './components/update-name'
import UpdatePhoto from './components/update-photo'
import UpdatePhone from './components/update-phone'
import UpdateAddress from './components/update-address'
import UpdateService from './components/update-service'

import { mapState } from 'vuex'
export default {
  name: 'User',
  components: {
    UpdateGender,
    UpdateName,
    UpdatePhoto,
    UpdatePhone,
    UpdateAddress,
    UpdateService

  },
  props: {},
  data () {
    return {
      isUpdateNameShow: false,
      isUpdateGenderShow: false,
      isUpdatePhotoShow: false,
      isUpdatePhoneShow: false,
      isUpdateServiceShow: false,
      isUpdateAddressShow: false,
      img: null, // 预览的图片
      isCountDown: false
    }
  },
  computed: {
    ...mapState(['user'])
  },
  watch: {},

  mounted () {},
  methods: {
    onFileChange () {
      // 获取文件对象
      const file = this.$refs.file.files[0]

      // 基于文章对象获取 blob 数据
      this.img = window.URL.createObjectURL(file)

      // 展示预览图片弹出层
      this.isUpdatePhotoShow = true

      // file-input 如果选了同一个文件不会触发 change 事件
      // 解决办法就是每次使用完毕，把它的 value 清空
      this.$refs.file.value = ''
    },
    onSendSms () {
      this.isCountDown = true
    },
    SaveUserMessage () {
      this.$router.push('/My')
    }

  }
  // updataName (newName) {
  //   console.log(newName)
  //   this.user.username = newName
  //   window.localStorage.setItem('userdata', newName)
  // }
}
</script>

<style scoped lang="scss">
.user {
  .page-nav-bar {
    height: 128px;

    background-color: #3f51b5;
  }
  ::v-deep .van-nav-bar__text {
    font-size: 32px;
    color: white;
  }
  ::v-deep .van-nav-bar__arrow {
    color: white;
  }
  .van-cell__title > span {
    font-size: 26x;
  }

  .avatar {
    width: 60px;
    height: 60px;
  }

  .van-popup {
    background-color: #f5f7f9;
  }

  .photo-cell {
    .van-cell__value {
      display: flex;
      flex-direction: row-reverse;
    }
  }
  .save {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 98px;
    width: 100%;
    font-size: 28px;
    line-height: 98px;
    color: white;
    text-align: center;
    background-color: #3f51b5;
  }
}
</style>
