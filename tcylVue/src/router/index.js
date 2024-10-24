import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'userslogin',
      component: () => import('../home/user/login/login.vue')
    },  
    {
      path: '/',
      name: 'user',
      component: () => import('../home/user/layout/inedx_1.vue')
    },  
    {
      path: '/productInfo/:id',
      name: 'productInfo',
      component: () => import('../home/user/layout/productInfo.vue')
    },
    {
      path: '/admin',
      name: 'home',
      component: () => import('../App.vue')
    },  
    {
      path: '/search',
      name: 'search',
      component: () => import('../home/user/layout/search.vue')
    },

  ]
})

export default router
