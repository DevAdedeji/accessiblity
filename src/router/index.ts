import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ModalView from '../views/ModalView.vue'
import DefaultView from '../layouts/default.vue'

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
        }
      ]
    }
  ]
})

export default router
