import { createRouter, createWebHistory } from 'vue-router'

import homeMack from '../views/homeMack'
import MackenzieSolucoes from '../views/MackenzieSolucoes.vue'
import CursoMack from '../views/CursoMack.vue'
import Contato from '../views/Contato.vue'

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
  {
    path: '/CursoMack',
    name: 'CursoMack',
    component: CursoMack
  },
  {
    path: '/Contato',
    name: 'Contato',
    component: Contato
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
