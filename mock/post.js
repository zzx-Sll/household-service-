
import Ministrydata from './Ministry'
import housekeepingdata from './housekeeping'

export default {
  'http://localhost:8080/postministry|post': option => {
    option.body = JSON.parse(option.body)
    console.log(option.body)
    return {
      status: 200,
      msg: '添加成功',
      data: Ministrydata
    }
  },
  'http://localhost:8080/posthousekeeping|post': option => {
    option.body = JSON.parse(option.body)
    console.log(option.body)
    return {
      status: 200,
      msg: '添加成功',
      data: housekeepingdata
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
  }

}
