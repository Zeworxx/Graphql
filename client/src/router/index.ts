import { createRouter, createWebHistory, type NavigationGuardNext } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/IndexVue.vue'),
      beforeEnter: (to, from, next) => checkAuth(next) 
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

function checkAuth(next: NavigationGuardNext): void {
  const logged = localStorage.getItem('logged') === 'true'
  if (!logged) {
    next('/signin')
  } else {
    next()
  }
}

export default router
