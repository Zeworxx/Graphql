import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/IndexVue.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignupVue.vue')
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: () => import('../views/SignInVue.vue')
    }
  ]
});

export default router
