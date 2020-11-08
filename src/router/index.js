import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // layout主组件
  {
    path: '/',
    component: () => import('@/views/layout'),

    children: [{
      // home组件
      path: '/Home',
      component: () => import('../views/layout/Home/index.vue')

      // redirect: '/Home'
    },
    { path: '/My', component: () => import('@/views/my') },
    { path: '/HouseWorker', component: () => import('@/views/HouseWorker') },
    { path: '/Company', component: () => import('@/views/Company') }
    ]
  }, // 月嫂详情组件
  {
    path: '/MaternityMatron', component: () => import('@/views/layout/Home/components/MaternityMatron.vue')
  },

  // My组件的子路由
  {
    path: '/user/profile',
    name: 'user',
    component: () => import('@/views/user/profile')
  },
  // 登录页面
  { path: '/Login', component: () => import('@/views/login') },
  {
    // 商务入住组件
    path: '/Business',
    name: 'Business',
    component: () => import('@/views/layout/Home/components/Business.vue')
  },
  {
    // 公司详情组件
    path: '/CompanyDetails',
    name: 'CompanyDetails',
    component: () => import('@/views/layout/Home/components/CompanyDetails.vue')

  },
  {
    //
    path: '/boss',
    name: 'ServiceStaff',
    component: () => import('../views/boss/index.vue')

  },
  // 关于我们组件
  { path: '/AboutUs', component: () => import('@/views/aboutus') }

]

const router = new VueRouter({
  routes
})

export default router
