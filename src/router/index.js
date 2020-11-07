import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // redirect: '/Home',
    component: () => import('@/views/layout'),
    children: [{
      path: '/Home', component: () => import('../views/layout/Home/index.vue')
    }]

  }
]

const router = new VueRouter({
  routes
})

export default router
