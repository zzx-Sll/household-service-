import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    user: JSON.parse(window.localStorage.getItem('usersdata')) || { username: '', password: '' }

  },
  mutations: {
    // 存储用户信息的函数
    setUser (state, val) {
      state.user.username = val[0]
      state.user.password = val[1]
      window.localStorage.setItem('usersdata', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
