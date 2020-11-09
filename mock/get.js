// 导入公司列表
import companys from './company'

// 首页展示的公司列表
// const CompanyList = [images]
export default {
  'http://localhost:8080/getCompanys|get': option => {
    console.log(option)
    return {
      status: 200,
      msg: '请求成功',
      data: companys
    }
  }
  // 'http://localhost:8080/get|get': option => {
  //   console.log(option)
  //   return {
  //     status: 200,
  //     msg: '请求成功'
  //     // data: CompanyList
  //   }
  // }
}
