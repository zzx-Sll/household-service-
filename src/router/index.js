import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // layout主组件
  {
    path: '/',

    component: () => import('@/views/layout'),
    children: [{
      path: '/Home',
      component: () => import('../views/layout/Home/index.vue'),
      children: [{
        path: '/Business',
        name: 'Business',
        component: () => import('@/views/layout/Home/Business.vue')
      }]
    }]
    // redirect: '/Home'
  },
  // 登录页面
  { path: '/Login', component: () => import('@/views/login') }]

const router = new VueRouter({
  routes
})

export default router
