import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/strew',
      name: 'strew',
      component: () => import('../views/Strew.vue')
    },
    {
        path: '/vanila',
        name: 'vanila',
        component: () => import('../views/Vanila.vue')
      },
      {
        path: '/pulse',
        name: 'pulse',
        component: () => import('../views/Pulse.vue')
      },
      {
        path: '/lem',
        name: 'lem',
        component: () => import('../views/Lem.vue')
      },
      {
        path: '/choc',
        name: 'choc',
        component: () => import('../views/Choc.vue')
      },
      {
        path: '/platter3',
        name: 'platter3',
        component: () => import('../views/Platter3.vue')
      },
      {
        path: '/platter2',
        name: 'platter2',
        component: () => import('../views/Platter2.vue')
      },
      {
        path: '/platter1',
        name: 'platter2',
        component: () => import('../views/Platter1.vue')
      },
      {
        path: '/velvet',
        name: 'velvet',
        component: () => import('../views/Velvet.vue')
      }
  ]
})

export default router
