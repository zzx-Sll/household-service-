<template>
  <div class="about-us">
    <!-- 导航栏 -->
    <van-nav-bar class="aboutUs-nav-bar"
                 left-text="关于我们"
                 left-arrow
                 @click-left="$router.back()" />

    <!-- 标题和图片区域 -->
    <div class="header">
      <div class="title">湖南家政平台</div>
      <div class="image">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604930519339&di=547e7b93af82f50513bf859580f85292&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2634240147%2C259401863%26fm%3D214%26gp%3D0.jpg"
             alt="">
      </div>
    </div>

    <!-- 公司介绍段落模块 -->
    <div class="brief">
      <div>湖南家政平台是由新湖南客户端，湖南征信公司，兴业银行长沙分，中国人寿湖南分公司共同建设的有个集微信.H5手机端.电脑PC端.APP四网合一的人工智能家政服务平台，帮助家服企业通过家政平台实现在线推广服务，在线签合同，子凹陷支付，家服人员档案管理.家服人员派单管理等服务，从而提高工作效率与服务质量的家政服务平台
      </div>
    </div>

    <div class="footer">
      <div>
        联系方式: 15236985241
      </div>
      <div>
        联系地址: 湖南省长沙市天心区蓉云工业园凯覆漫城烛照小区4栋1311房
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about-us {
  .aboutUs-nav-bar {
    height: 128px;
    background-color: #3f51b5;
    ::v-deep .van-nav-bar__left {
      .van-icon-arrow-left,
      .van-nav-bar__text {
        color: #fff;
        font-size: 28px;
      }
    }
  }
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      height: 108px;
      width: 100%;
      text-align: center;
      font-weight: 600;
      line-height: 108px;
      font-size: 32px;
    }
    .image {
      height: 346px;
      margin: 0 32px;
      background-size: cover;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .brief {
    height: 262px;
    margin: 32px;
    div {
      font-size: 24px;
      font-weight: 500;
      line-height: 44px;
    }
  }
  .footer {
    height: 128px;
    margin: 50px 32px;
    div {
      font-size: 24px;
      font-weight: 500;
      margin: 12px 0;
    }
  }
}
</style>
