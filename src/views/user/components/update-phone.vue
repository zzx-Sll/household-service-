<template>
  <div class="update-phone">
    <!-- 导航栏 -->
    <van-nav-bar title="填写手机号码"
                 left-text="取消"
                 right-text="完成"
                 @click-left="$emit('close')"
                 @click-right="onConfirm" />
    <!-- /导航栏 -->
    <!-- 输入框 -->
    <div class="field-wrap">
      <van-field v-model.trim="localPhone"
                 rows="2"
                 autosize
                 type="textarea"
                 maxlength="11"
                 placeholder="请输入电话号码"
                 show-word-limit />
    </div>
    <!-- /输入框 -->
  </div>
</template>

<script>

export default {
  name: 'UpdatePhone',
  components: {},
  props: {
    // value: {
    //   type: Number,
    //   required: true
    // }
  },
  data () {
    return {
      // localPhone: this.value
      localPhone: 13811111111
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
        const localPhone = this.localPhone
        if (!localPhone.length) {
          this.$toast('昵称不能为空')
          return
        }

        // 更新视图
        this.$emit('input', localPhone)

        // 关闭弹层
        this.$emit('close')

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
