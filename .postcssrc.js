module.exports = {
  plugins: {
    // 配置使用autoprefixer插件，生成浏览器css样式规则前缀
    //警告原因，vue-cli自动配置了autoprefixer
    /* 'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    }, */
    // 把px转换为rem
    'postcss-pxtorem': {
      // 设置根元素的值,lib-flexible的rem适配方案，分成十分
      // vant自动设置37.5,设计稿750，所以设计稿尺寸需要/2
      rootValue ({file}) {
        // console.log('这是返回的文件：',file)
       
        return  file.indexOf('vant')!==-1 ? 37.5:75
      },
      // 配置要转换的css属性
      propList: ['*'],
      //配置不要转换的样式资源
      exclude:'github-markdown'
    }
  }
}