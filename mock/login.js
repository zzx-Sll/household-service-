/*
封装登录的方法
*/

export default {
  'http://localhost:8080/login|post': option => {
    console.log(option)
    return {
      status: 200,
      msg: '请求成功'
    }
  }
}
