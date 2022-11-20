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
        component: () => import('@/components/Home.vue'),
        redirect: '/chart',
        children: [{
            path: '/social',
            name: 'social',
            component: () => import('@/components/social/Social.vue'),
        }, {
            path: '/chart',
            name: 'chart',
            component: () => import('@/components/chartRoom/Chart.vue'),
        }]
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