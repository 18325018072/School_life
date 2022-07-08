import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/studentSystem',
        name: 'studentSystem',
        component: () => import('../views/StudentSystem.vue')
    },
    {
        path: '/schoolServe',
        name: 'schoolServe',
        component: () => import('../views/SchoolServe.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
