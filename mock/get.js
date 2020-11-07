export default {
  'http://localhost:8080/getAPI|get': option => {
    console.log(option)
    return {
      status: 200,
      msg: '请求成功'
    }
  }
}
