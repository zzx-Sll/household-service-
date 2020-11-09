const list = [1, 2, 3]
export default {
  'http://localhost:8080/getAPI|post': option => {
    console.log(option)
    return {
      status: 200,
      msg: '请求成功',
      data: list
    }
  }
}
