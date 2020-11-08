<template>
  <div class="update-address">
    <!-- 导航栏 -->
    <van-nav-bar
      title="编辑详细地址"
      left-text="取消"
      right-text="完成"
      @click-left="$emit('close')"
      @click-right="onConfirm"
    />
    <!-- /导航栏 -->
    <!-- 输入框 -->
    <div class="field-wrap">
      <van-field
        v-model.trim="localAddress"
        rows="2"
        autosize
        type="textarea"
        maxlength="99"
        placeholder="请输入详细地址"
        show-word-limit
      />
    </div>
    <!-- /输入框 -->
  </div>
</template>

<script>

export default {
  name: 'UpdateAddress',
  components: {},
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      localAddress: this.value
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
        const localAddress = this.localAddress
        if (!localAddress.length) {
          this.$toast('地址不能为空')
          return
        }

        // 更新视图
        this.$emit('input', localAddress)

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
</style>
