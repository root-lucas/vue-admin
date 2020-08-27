import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        component: () => import('../components/common/Home.vue'),
        meta: { title: '自述文件' },
        children: [
            {
                path: '/dashboard',
                component: () => import('../components/page/Dashboard.vue'),
                meta: { title: '系统首页' },
            },
            {
                path: '/404',
                component: () => import('../components/page/404.vue'),
                meta: { title: '404' },
            },
            {
                path: '/table',
                component: () => import('../components/page/BaseTable.vue'),
                meta: { title: '基础表格' },
            },
            {
                path: '/tabs',
                component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                meta: { title: 'tab选项卡' }
            },
            {
                path: '/form',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                meta: { title: '基本表单' }
            },
        ],
    },
    {
        path: '/login',
        component: () => import('../components/page/Login.vue'),
        meta: { title: '登录' },
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
