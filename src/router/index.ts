import { createRouter, createWebHistory } from 'vue-router'

import CardapioView from '@/views/CardapioView.vue'
import PainelView from '@/views/PainelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cardapio/:id', // Define o parâmetro dinâmico 'id'
      name: 'cardapio',
      component: CardapioView,
    },

    {
      path: '/meu-painel/:id',
      name: 'meu-painel',
      component: PainelView,
    },
  ],
})

export default router
