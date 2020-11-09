import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant组件库
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
// import request from './utiles/request'
// 导入全局组件
import './style/index.scss'
// 导入Mock
import '../mock'
// 导入request
import request from './utiles/request'
// 全局使用vant组件
Vue.use(Vant)
Vue.prototype.$request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
