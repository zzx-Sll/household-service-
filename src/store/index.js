import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 用户信息
    user: {
      username: '',
      password: ''
    }
  },
  mutations: {
    // 存储用户信息的函数
    setUser (state, val) {
      console.log(val)
      state.user.username = val[0]
      state.user.password = val[1]
      console.log('yonghu', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
