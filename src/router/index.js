import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout')
    // redirect: '/Home'
  }
]

const router = new VueRouter({
  routes
})

export default router
