import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/gen',
      name: 'gen',
      component: () => import('../views/Gen.vue')
    },
    {
        path: '/shot',
        name: 'shot',
        component: () => import('../views/Shot.vue')
      },
      {
        path: '/vodka',
        name: 'vodka',
        component: () => import('../views/Vodka.vue')
      }
  ]
})

export default router
