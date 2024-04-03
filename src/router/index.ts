import { createRouter, createWebHistory } from 'vue-router'
import DefaultView from '../layouts/default.vue'
import HomeView from '../views/HomeView.vue'
import ModalView from '../views/ModalView.vue'
import SelectMenuView from '@/views/SelectMenuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/',
      component: DefaultView,
      children: [
        {
          path: 'modal',
          name: 'modal',
          component: ModalView
        },
        {
          path: 'select-menu',
          name: 'select-menu',
          component: SelectMenuView
        }
      ]
    }
  ]
})

export default router
