// 导入公司列表
import companys from './company'

export default {
  // 修改关注公司的接口
  'http://localhost:8080/patchCurrentCompany|patch': option => {
    const obj = JSON.parse(option.body)
    const currentCompany = companys.find(item => {
      if (item.id === obj.id) {
        item.if_followed = obj.is_followed
      }
      return item
    })
    console.log(obj.id)

    return {
      status: 200,
      msg: '修改成功',
      data: currentCompany
    }
  },
  // 修改对月嫂关注的状态
  'http://localhost:8080/patchCurrentWorker|patch': option => {
    const obj = JSON.parse(option.body)
    const currentCompany = companys.find(item => {
      if (item.id === parseInt(obj.id)) {
        item.if_followed = obj.is_followed
      }
      return item
    })
    console.log(obj.id)

    return {
      status: 200,
      msg: '修改成功',
      data: currentCompany
    }
  }
}
