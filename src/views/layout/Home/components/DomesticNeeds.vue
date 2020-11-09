<template>
  <div>
    <van-nav-bar left-text="找家政服务"
                 left-arrow
                 @click-left="onClickLeft"
                 class="navbar" />

    <div class="card">
      <van-cell class="first">
        <div slot="title">
          <span class="bluebox">找家政</span>
        </div>
      </van-cell>

      <van-cell title="需求岗位">
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

      <van-field v-model="Enterprisename"
                 label="手机号码:" />

      <van-cell is-link
                arrow-direction="down"
                value="不限">
        <!-- 使用 title 插槽来自定义标题 -->
        <span slot="title"
              class="custom-title">年龄:</span>
      </van-cell>

      <van-cell is-link
                arrow-direction="down"
                value="不限">
        <!-- 使用 title 插槽来自定义标题 -->
        <span slot="title"
              class="custom-title">薪资:</span>
      </van-cell>
      <van-cell>
        <!-- 使用 title 插槽来自定义标题 -->
        <van-tag size="medium"
                 round
                 type="primary"
                 plain
                 class="skill"
                 color="#A7A2A2">住家</van-tag>
        <van-tag size="medium"
                 round
                 type="primary"
                 plain
                 class="skill"
                 color="#A7A2A2">不住家</van-tag>
        <div slot="title"
             class="custom-title">住家:</div>
      </van-cell>
      <van-field v-model="Enterprisename"
                 label="联系人:" />
      <van-field v-model="Enterprisename"
                 label="籍贯要求:" />
      <van-field v-model="Enterprisename"
                 label="工作地点:" />

    </div>
    <van-button type="primary"
                class="submitdata"
                size="large"
                color="#3F51B5">提交资料</van-button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
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
.card {
  width: 704px;
  height: 1126px;

  position: absolute;
  top: 53%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  .bluebox {
    padding-left: 20px;
    border-left: #3f51b5 solid 8px;
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
.submitdata {
  position: fixed;
  bottom: 0;
}
</style>
