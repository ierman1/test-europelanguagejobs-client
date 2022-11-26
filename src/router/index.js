import { createRouter, createWebHistory } from 'vue-router'
import DogListView from "@/views/dogs/DogListView";
import DogSingleView from "@/views/dogs/DogSingleView";
import DogCreateView from "@/views/dogs/DogCreateView";

const routes = [
    {
        path: '/',
        name: 'dogList',
        component: DogListView
    },
    {
        path: '/dogs/create',
        name: 'dogCreate',
        component: DogCreateView
    },
    {
        path: '/dogs/:id',
        name: 'dogSingle',
        component: DogSingleView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
