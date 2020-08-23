import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('../components/common/Home.vue'),
        meta: { title: '自述文件' },
    },
    {
        path: '/login',
        component: () => import('../components/page/Login.vue'),
        meta: { title: '登录' },
    },
    {
        path: '/404',
        component: () => import('../components/page/404.vue'),
        meta: { title: '404' },
    },
    {
        path: '*',
        redirect: '/404',
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router
