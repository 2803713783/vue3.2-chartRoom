import {
    createRouter,
    createWebHistory,
    createWebHashHistory
} from 'vue-router'

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/components/Home.vue')
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/loginAndReg.vue')
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    // history: createWebHistory(),
    routes
})
export default router