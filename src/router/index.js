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
  { path: '/Login', component: () => import('@/views/login') },
  // My组件的子路由
  {
    path: '/user/index',
    name: 'user',
    component: () => import('@/views/user/index')
  }

]

const router = new VueRouter({
  routes
})

export default router
