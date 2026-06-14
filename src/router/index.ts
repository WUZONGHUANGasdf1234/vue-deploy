import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index.vue'
import App02 from '@/views/App02.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index // 访问 / 时显示 index.vue
    },
    {
      path: '/app02',
      name: 'app02',
      component: App02 // 访问 /app02 时显示 App02.vue
    }
  ]
})

export default router
