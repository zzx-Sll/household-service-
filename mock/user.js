var users = []

users.push({
  photo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605069334516&di=74bdb489d84c6d96b51d1bec8a5a10a4&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202011%2F07%2F20201107184951_ca4da.thumb.1000_0.jpeg',
  gender: 1,
  phone: 18311111111,
  serviceArea: '湖南省长沙市',
  Address: '麓谷街道东方红大厦'
})

export default {
  // 获取个人资料的接口
  'http://localhost:8080/getUserData|get': option => {
    return {
      status: 200,
      msg: '请求成功',
      data: users
    }
  },
  // 修改用户手机号码接口
  'http://localhost:8080/patchUserPhone|patch': option => {
    console.log(option.body)
    users[0].phone = option.body
    // 做筛选出公司的函数
    return {
      status: 200,
      msg: '请求成功',
      data: users
    }
  },
  // 修改服务区域
  'http://localhost:8080/patchServiceArea|patch': option => {
    console.log(option.body)
    users[0].serviceArea = option.body
    // 做筛选出公司的函数
    return {
      status: 200,
      msg: '请求成功',
      data: users
    }
  },
  // 修改详细地址
  'http://localhost:8080/patchAddress|patch': option => {
    console.log(option.body)
    users[0].Address = option.body
    // 做筛选出公司的函数
    return {
      status: 200,
      msg: '请求成功',
      data: users
    }
  }
}
