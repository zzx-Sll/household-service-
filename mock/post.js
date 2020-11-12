
import Ministrydata from './Ministry'
import housekeepingdata from './housekeeping'
import servicestandards from './ServiceStandards'

export default {
  // 提交入驻商务部接口
  'http://localhost:8080/postministry|post': option => {
    option.body = JSON.parse(option.body)
    console.log(option.body)
    return {
      status: 200,
      msg: '添加成功',
      data: Ministrydata
    }
  },
  // 找家政服务接口
  'http://localhost:8080/posthousekeeping|post': option => {
    option.body = JSON.parse(option.body)
    console.log(option.body)
    return {
      status: 200,
      msg: '添加成功',
      data: housekeepingdata
    }
  },
  // 提交家政服务标准接口
  'http://localhost:8080/servicestandards|post': option => {
    option.body = JSON.parse(option.body)
    console.log(option.body)
    return {
      status: 200,
      msg: '添加成功',
      data: servicestandards
    }
  },
  // 提交求职的接口
  'http://localhost:8080/HouseJob|post': option => {
    // option.body = JSON.parse(option.body)
    console.log(option)
    return {
      status: 200,
      msg: '提交成功'
    }
  },
  // 家服公司提交筛选
  'http://localhost:8080/HouseCompany|post': option => {
    // option.body = JSON.parse(option.body)
    console.log(option)
    return {
      status: 200,
      msg: '提交成功'
    }
  }

}
