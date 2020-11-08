<template>
  <div class="update-name">
    <!-- 导航栏 -->
    <van-nav-bar title="设置昵称"
                 left-text="取消"
                 right-text="完成"
                 @click-left="$emit('close')"
                 @click-right="onConfirm" />
    <!-- /导航栏 -->
    <!-- 输入框 -->
    <div class="field-wrap">
      <van-field v-model.trim="localName"
                 rows="2"
                 autosize
                 type="textarea"
                 maxlength="7"
                 placeholder="请输入昵称"
                 show-word-limit />
    </div>
    <!-- /输入框 -->
  </div>
</template>

<script>

export default {
  name: 'UpdateName',
  components: {},
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      localName: this.user.username
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    async onConfirm () {
      this.$toast.loading({
        message: '保存中...',
        forbidClick: true, // 禁止背景点击
        duration: 0 // 持续展示
      })

      try {
        const localName = this.localName
        if (!localName.length) {
          this.$toast('昵称不能为空')
          return
        }

        // 更新视图
        this.$emit('updata-name', localName)

        // 关闭弹层
        this.$emit('close')
        this.$store.commit('setUser', [this.localName, this.user.password])

        // 提示成功
        this.$toast.success('更新成功')
      } catch (err) {
        this.$toast.fail('更新失败')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.field-wrap {
  padding: 20px;
}
.van-nav-bar {
  height: 128px;

  background-color: #3f51b5;
}
::v-deep .van-nav-bar__title {
  color: white;
}
</style>
