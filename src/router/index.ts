import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/stores/auth'
import useLocalstorage from '@/plugins/localStorage'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: () => import('@/components/layout/DashBoard.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue'),
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') },
  ],
})

router.beforeEach(async (to, from, next) => {
  const store = useLocalstorage()
  const isAuthenticated = store.isAuthenticated()
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login')
  } else if (isAuthenticated && to.path === '/login') {
    next('/')
  } else {
    next()
  }
})

export default router
