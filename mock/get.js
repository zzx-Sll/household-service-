// 导入公司列表
import companys from './company'
// 首页展示的公司列表

export default {
  'http://localhost:8080/getCompanys|get': option => {
    console.log(option)
    return {
      status: 200,
      msg: '请求成功',
      data: companys
    }
  },
  // 获取当前公司详情的接口
  'http://localhost:8080/getCurrentCompany|get': option => {
    console.log(option)
    // 做筛选出公司的函数
    const currentCompany = companys.find(item => item.id === option.body)
    return {
      status: 200,
      msg: '请求成功',
      data: currentCompany
    }
  }
}
