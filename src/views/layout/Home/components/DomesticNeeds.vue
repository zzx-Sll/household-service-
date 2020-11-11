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

      <van-field v-model="telephonenum"
                 label="手机号码:" />

      <van-cell is-link
                arrow-direction="down"
                :value='agenum'
                @click="showageonConfirm">
        <!-- 使用 title 插槽来自定义标题 -->
        <span slot="title"
              class="custom-title">年龄:</span>
      </van-cell>

      <van-cell is-link
                arrow-direction="down"
                :value="moneynum"
                @click="showmoneyonConfirm">
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
      <van-field v-model="contacts"
                 label="联系人:" />
      <van-field v-model="requirement"
                 label="籍贯要求:" />
      <van-field v-model="workplace"
                 label="工作地点:" />

    </div>
    <!-- 年龄选择器 -->
    <van-popup v-model="showPickerage"
               round
               position="bottom">
      <van-picker show-toolbar
                  :columns="age"
                  @cancel="showPickerage = false"
                  @confirm="ageonConfirm" />
    </van-popup>
    <!-- 薪资选择器 -->
    <van-popup v-model="showPickermoney"
               round
               position="bottom">
      <van-picker show-toolbar
                  :columns="money"
                  @cancel="showPickermoney = false"
                  @confirm="moneyonConfirm" />
    </van-popup>
    <!-- 按钮 -->
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
      telephonenum: '',
      contacts: '',
      requirement: '',
      workplace: '',
      // 年龄选择器data
      agenum: '',
      showPickerage: false,
      age: ['35~40', '40~45', '45~50'],
      // 年龄选择器data
      moneynum: '',
      showPickermoney: false,
      money: ['2000-2500', '2500-3000', '3000-3500', '3500-4000']
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    showageonConfirm () {
      this.showPickerage = true
    },
    ageonConfirm (val) {
      this.agenum = val
      this.showPickerage = false
    },
    showmoneyonConfirm () {
      this.showPickermoney = true
    },
    moneyonConfirm (val) {
      this.moneynum = val
      this.showPickermoney = false
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
