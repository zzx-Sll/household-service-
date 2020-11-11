import Vue from 'vue'
import Vuex from 'vuex'
// 导入公司列表
// import companys from '../../mock/company'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    user: JSON.parse(window.localStorage.getItem('usersdata')) || { username: '', password: '' },
    // 当前公司信息
    currentCompanys: {}
  },
  mutations: {
    // 存储用户信息的函数
    setUser (state, val) {
      state.user.username = val[0]
      state.user.password = val[1]
      window.localStorage.setItem('usersdata', JSON.stringify(state.user))
    },
    // 显示当前公司信息的函数
    showCurrentCompany (state, val) {
      console.log('显示当前公司信息', val)
      state.currentCompanys = val
    }
  },
  actions: {
  },
  modules: {
  }
})
