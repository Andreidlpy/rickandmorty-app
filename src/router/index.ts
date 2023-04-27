import { createRouter, createWebHistory } from 'vue-router'
import Content from '@/views/Content.vue'
import Character from '@/views/Character.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Content
    },
    {
      path: '/character/:id',
      name: 'character',
      component: Character,
      props: ( route:any ) => ({ id: route.params.id })
    },
  ]
})

export default router
