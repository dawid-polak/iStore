import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/shop/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/account/LogIn.vue') 
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/account/SignUp.vue')
    },
    {
      path: '/resetpassword',
      name: 'changepassword',
      component: () => import('../views/account/ChangePassword.vue')
    },
    {
      path: '/myAccount',
      name: 'myaccount',
      component: () => import('../views/account/MyAccount.vue')
    }
  ]
})

export default router
