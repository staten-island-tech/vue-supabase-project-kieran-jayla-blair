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
      path: '/about',
      name: 'about',
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
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/postsbutton.vue')
    },
  ]
})

export default router
