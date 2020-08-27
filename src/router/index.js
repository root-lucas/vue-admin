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
                meta: { title: 'tab选项卡' },
            },
            {
                path: '/form',
                component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                meta: { title: '基本表单' },
            },
            {
                // 富文本编辑器组件
                path: '/editor',
                component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                meta: { title: '富文本编辑器' },
            },
            {
                // markdown组件
                path: '/markdown',
                component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                meta: { title: 'markdown编辑器' },
            },
            {
                // 图片上传组件
                path: '/upload',
                component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                meta: { title: '文件上传' },
            },
            {
                path: '/icon',
                component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                meta: { title: '自定义图标' },
            },
            {
                // 拖拽列表组件
                path: '/drag',
                component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                meta: { title: '拖拽列表' },
            },
            {
                // 拖拽Dialog组件
                path: '/dialog',
                component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                meta: { title: '拖拽弹框' },
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
