<template>
  <div class="user">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar"
                 left-text="个人资料"
                 left-arrow
                 @click-left="$router.back()" />
    <!-- /导航栏 -->
    <input
      type="file"
      hidden
      ref="file"
      @change="onFileChange"
    >

    <!-- 个人信息 -->
    <van-cell
    size="large"
      class="photo-cell"
      title="头像"
      is-link
      center
      @click="$refs.file.click()"
    >
      <van-image
        class="avatar"
        fit="cover"
        round
        :src="users.photo"
      />
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
              :value="users.gender === 1 ? '女' : '男'" />
    <van-cell size="large"
              title="手机号码:"
              :value="users.phone"
              is-link
              @click="isUpdatePhoneShow = true" />
    <van-cell size="large"
              title="服务区域:"
              :value="users.serviceArea"
              is-link
              @click="isUpdateServiceShow = true" />
    <van-cell size="large"
              title="详细地址:"
              is-link
              @click="isUpdateAddressShow = true"
              :value="users.Address" />
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

    <!-- 个人信息 -->
    <!-- 弹层 -->

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
                     v-model="users.gender"
                     @close="isUpdateGenderShow = false" />
    </van-popup>
    <!-- /编辑性别 -->
    <!-- 编辑手机 -->
    <van-popup v-model="isUpdatePhoneShow"
               style="height: 100%;"
               position="bottom">
      <update-phone v-if="isUpdatePhoneShow"
                    v-model="users.phone"
                    @close="isUpdatePhoneShow = false" />
    </van-popup>
    <!-- /编辑手机 -->
    <!-- 编辑详细地址 -->
    <van-popup v-model="isUpdateAddressShow"
               style="height: 100%;"
               position="bottom">
      <update-address v-if="isUpdateAddressShow"
                      v-model="users. Address"
                      @input="users. Address = $event"
                      @close="isUpdateAddressShow = false" />
    </van-popup>
    <!-- /编辑详细地址 -->
    <!-- 编服务地址 -->
    <van-popup v-model="isUpdateServiceShow"
               style="height: 100%;"
               position="bottom">
      <update-service v-if="isUpdateServiceShow"
                      v-model="users.serviceArea"
                      @close="isUpdateServiceShow = false" />
    </van-popup>
    <!-- /编辑服务地址 -->

  </div>
</template>

<script>
import UpdateGender from './components/update-gender'
import UpdateName from './components/update-name'
import UpdatePhone from './components/update-phone'
import UpdateAddress from './components/update-address'
import UpdateService from './components/update-service'

import { mapState } from 'vuex'
export default {
  name: 'User',
  components: {
    UpdateGender,
    UpdateName,
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
      isCountDown: false,
      users: {}
    }
  },
  computed: {
    ...mapState(['user'])
  },
  created () {
    this.getUserData()
  },
  watch: {},

  mounted () {

  },
  methods: {
    onSendSms () {
      this.isCountDown = true
    },
    SaveUserMessage () {
      this.$router.push('/My')
    },
    async getUserData () {
      const { data } = await this.$request.get('getUserData')
      console.log(data)
      this.users = data.data[0]
    },
    async onFileChange () {
      // 获取文件对象
      try {
        const file = this.$refs.file.files[0]

        // 基于文章对象获取 blob 数据
        this.img = window.URL.createObjectURL(file)
        const image = this.img
        const { data } = await this.$request.patch('patchUserData', image)
        console.log(data)
        // this.isUpdatePhotoShow = true
        this.$refs.file.value = ''
        this.getUserData()
        this.$toast.success('更新成功')
      } catch (err) {
        this.$toast.fail('更新失败')
      }
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

</style>
