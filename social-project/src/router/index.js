import { createRouter, createWebHistory } from 'vue-router'
import AppVue from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/signIn.vue')
    },
    {
      path: '/homePage',
      name: 'homePage',
      component: () => import('../views/homeyhome.vue')
    },
  ]
})

export default router
