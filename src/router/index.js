import { createRouter, createWebHistory } from 'vue-router'

import homeMack from '../views/homeMack'
import MackenzieSolucoes from '../views/MackenzieSolucoes.vue'

const routes = [
  {
    path: '/homeMack',
    name: 'homeMack',
    component: homeMack
  },
  {
    path: '/MackenzieSolucoes',
    name: 'MackenzieSolucoes',
    component: MackenzieSolucoes
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
