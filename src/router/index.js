import { createRouter, createWebHistory } from 'vue-router'
// Tela de Home
import Home from '../views/Home.vue'

// Cursos de Executivo
import Executivo from '../views/Cursos/Executivo/Executivo.vue'
// Cursos Contabil
import ApresentacaoFinanceira from '../views/Cursos/Executivo/Contabil/ApresentacaoFinanceira.vue'
import AtivosFinanceira from '../views/Cursos/Executivo/Contabil/AtivosFinanceira.vue'
import Atuario from '../views/Cursos/Executivo/Contabil/Atuario.vue'
import BasicoControladoria from '../views/Cursos/Executivo/Contabil/BasicoControladoria.vue'
import ContabilidadeEmpresas from '../views/Cursos/Executivo/Contabil/ContabilidadeEmpresas.vue'
import ContabilidadePM from '../views/Cursos/Executivo/Contabil/ContabilidadePM.vue'
import ControladoriaContadores from '../views/Cursos/Executivo/Contabil/ControladoriaContadores.vue'
import ControladoriaGerencial from '../views/Cursos/Executivo/Contabil/ControladoriaGerencial.vue'
import ControlesPensao from '../views/Cursos/Executivo/Contabil/ControlesPensao.vue'
import FinancasContabilidade from '../views/Cursos/Executivo/Contabil/FinancasContabilidade.vue'
import GestaoPatrimoniais from '../views/Cursos/Executivo/Contabil/GestaoPatrimoniais.vue'
import GestaoPensao from '../views/Cursos/Executivo/Contabil/GestaoPensao.vue'
import GovernancaPatrimoniais from '../views/Cursos/Executivo/Contabil/GovernancaPatrimoniais.vue'
import GovernancaPensao from '../views/Cursos/Executivo/Contabil/GovernancaPensao.vue'
import IFRS from '../views/Cursos/Executivo/Contabil/IFRS.vue'
import ReconhecimentoReceitas from '../views/Cursos/Executivo/Contabil/ReconhecimentoReceitas.vue'

// Tela de contato
import Contato from '../views/Contato.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Executivo',
    name: 'Executivo',
    component: Executivo
  },
  {
    path: '/ApresentacaoFinanceira',
    name: 'ApresentacaoFinanceira',
    component: ApresentacaoFinanceira
  },
  {
    path: '/AtivosFinanceira',
    name: 'AtivosFinanceira',
    component: AtivosFinanceira
  },
  {
    path: '/Atuario',
    name: 'Atuario',
    component: Atuario
  },
  {
    path: '/BasicoControladoria',
    name: 'BasicoControladoria',
    component: BasicoControladoria
  },
  {
    path: '/ContabilidadeEmpresas',
    name: 'ContabilidadeEmpresas',
    component: ContabilidadeEmpresas
  },
  {
    path: '/ContabilidadePM',
    name: 'ContabilidadePM',
    component: ContabilidadePM
  },
  {
    path: '/ControladoriaContadores',
    name: 'ControladoriaContadores',
    component: ControladoriaContadores
  },
  {
    path: '/ControladoriaGerencial',
    name: 'ControladoriaGerencial',
    component: ControladoriaGerencial
  },
  {
    path: '/ControlesPensao',
    name: 'ControlesPensao',
    component: ControlesPensao
  },
  {
    path: '/FinancasContabilidade',
    name: 'FinancasContabilidade',
    component: FinancasContabilidade
  },
  {
    path: '/GestaoPatrimoniais',
    name: 'GestaoPatrimoniais',
    component: GestaoPatrimoniais
  },
  {
    path: '/GestaoPensao',
    name: 'GestaoPensao',
    component: GestaoPensao
  },
  {
    path: '/GovernancaPatrimoniais',
    name: 'GovernancaPatrimoniais',
    component: GovernancaPatrimoniais
  },
  {
    path: '/GovernancaPensao',
    name: 'GovernancaPensao',
    component: GovernancaPensao
  },
  {
    path: '/IFRS',
    name: 'IFRS',
    component: IFRS
  },
  {
    path: '/ReconhecimentoReceitas',
    name: 'ReconhecimentoReceitas',
    component: ReconhecimentoReceitas
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
