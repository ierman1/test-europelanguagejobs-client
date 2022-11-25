import { createRouter, createWebHistory } from 'vue-router'
import DogListView from "@/views/dogs/DogListView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: DogListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
