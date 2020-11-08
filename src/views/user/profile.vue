<template>
  <div class="user">
    <!-- 导航栏 -->
    <van-nav-bar
      class="page-nav-bar"
      title="个人资料"
      left-arrow
      @click-left="$router.back()"
    />
    <!-- /导航栏 -->
    <input
      type="file"
      hidden
      ref="file"
      @change="onFileChange"
    >
    <!-- 个人信息 -->
    <van-cell
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
      />
    </van-cell>
    <van-cell
      title="昵称"
      is-link
      @click="isUpdateNameShow = true"
    />
    <van-cell
      title="性别"
      is-link
      @click="isUpdateGenderShow = true"
    />
        <van-cell
      title="手机号码"
      is-link
      @click="isUpdatePhoneShow = true"
    />
        <van-cell
      title="服务区域"
      is-link
      @click="isUpdateServiceShow = true"
    />
        <van-cell
      title="详细地址"
      is-link
      @click="isUpdateAddressShow = true"
    />
          <van-field label="手机验证码:" name="code" placeholder="请输入验证码"  type="number" maxlength="6">
        <i slot="left-icon" class="iconfont iconyanzhengma"></i>

          <!-- <van-count-down :time="1000 * 60" format="ss s" v-if="isCountDown" @finish="isCountDown = false" /> -->
        <template #button>
          <van-count-down :time="1000 * 60" format="ss s"  />
          <van-button  round class="send-sms-btn" size="small" type="default" native-type="button">获取验证码</van-button>
        </template>
          </van-field>

    <!-- 个人信息 -->
<!-- 弹层 -->
    <!-- 编辑头像 -->
    <van-popup
      v-model="isUpdatePhotoShow"
      position="bottom"
      style="height: 100%;"
    >
      <update-photo
        v-if="isUpdatePhotoShow"
        :img="img"
      />
    </van-popup>
    <!-- /编辑头像 -->
    <!-- 编辑昵称 -->
    <van-popup
      v-model="isUpdateNameShow"
      style="height: 100%;"
      position="bottom"
    >
      <update-name
        v-if="isUpdateNameShow"
        @close="isUpdateNameShow = false"
      />
    </van-popup>
    <!-- /编辑昵称 -->

    <!-- 编辑性别 -->
    <van-popup
      v-model="isUpdateGenderShow"
      style="height: 100%;"
      position="bottom"
    >
      <update-gender
        v-if="isUpdateGenderShow"
        @close="isUpdateGenderShow = false"
      />
    </van-popup>
    <!-- /编辑性别 -->
        <!-- 编辑手机 -->
    <van-popup
      v-model="isUpdatePhoneShow"
      style="height: 100%;"
      position="bottom"
    >
      <update-phone
        v-if="isUpdatePhoneShow"
        @close="isUpdatePhoneShow = false"
      />
    </van-popup>
    <!-- /编辑手机 -->
            <!-- 编辑详细地址 -->
    <van-popup
      v-model="isUpdateAddressShow"
      style="height: 100%;"
      position="bottom"
    >
      <update-address
        v-if="isUpdateAddressShow"
        @close="isUpdateAddressShow = false"
      />
    </van-popup>
    <!-- /编辑详细地址 -->

  </div>
</template>

<script>
import UpdateGender from './components/update-gender'
import UpdateName from './components/update-name'
import UpdatePhoto from './components/update-photo'
import UpdatePhone from './components/update-phone'
import UpdateAddress from './components/update-address'
export default {
  name: 'User',
  components: {
    UpdateGender,
    UpdateName,
    UpdatePhoto,
    UpdatePhone,
    UpdateAddress

  },
  props: {},
  data () {
    return {
      user: {}, // 个人信息
      isUpdateNameShow: false,
      isUpdateGenderShow: false,
      isUpdatePhotoShow: false,
      isUpdatePhoneShow: false,
      isUpdateServiceShow: false,
      isUpdateAddressShow: false,
      img: null // 预览的图片
    }
  },
  computed: {},
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
    }
  }
}
</script>

<style scoped lang="scss">
.user{
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
}
</style>
