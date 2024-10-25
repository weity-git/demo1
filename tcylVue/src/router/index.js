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
      component: () => import('../home/user/layout/home.vue')
    },  
    {
      path: '/productInfo/:id',
      name: 'productInfo',
      component: () => import('../home/user/layout/productInfo.vue')
    },
     {
      path: '/cart',
      name: '/cart',
      component: () => import('../home/user/menu_item/car.vue')
    }  ,
   {
      path: '/orders',
      name: '/orders',
      component: () => import('../home/user/menu_item/order.vue')
    }   ,
    {
      path: '/settings',
      name: '/settings',
      component: () => import('../home/user/menu_item/set.vue')
    }  
  ]
})

export default router
