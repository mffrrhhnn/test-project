import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/CRUD',
    name: 'CRUD',
    component: () => import('../views/CRUD.vue')
  },
  {
    path: '/Buku',
    name: 'Buku',
    component: () => import('../views/Buku')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router