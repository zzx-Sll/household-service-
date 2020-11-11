// 导入公司列表
import companys from './company'
// 首页展示的公司列表
// 导入所有的月嫂信息
import houseWorkers from './houseWorkers'
export default {
  // 获取所有公司的接口
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
  },
  'http://localhost:8080/getBusinesstype|get': option => {
    console.log(option)
    // 做筛选出公司的函数
    return {
      status: 200,
      msg: '请求成功',
      data: [{ tp: '月嫂', active: true }, { tp: '保姆', active: true }, { tp: '育婴师', active: true }, { tp: '产康师', active: true }, { tp: '家装/搬家', active: true }, { tp: '早教/托育', active: true }, { tp: '养老/陪护', active: true }, { tp: '保洁/清洗', active: true }]
    }
  },
  // 获取所有月嫂的接口
  'http://localhost:8080/getAllWorker|get': option => {
    console.log(option)
    return {
      status: 200,
      msg: '请求成功',
      data: houseWorkers
    }
  }, // 获取当前公司详情的接口
  'http://localhost:8080/getCurrentWorker|get': option => {
    console.log(option)
    // 做筛选出月嫂的函数

    const currentWorker = houseWorkers.find(item =>
      item.id === parseInt(option.body))
    return {
      status: 200,
      msg: '请求成功',
      data: currentWorker
    }
  }

}
