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
                // vue-schart组件
                path: '/charts',
                component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                meta: { title: 'schart图表' },
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
            {
                // 国际化组件
                path: '/i18n',
                component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                meta: { title: '国际化' },
            },
            {
                // 权限页面
                path: '/permission',
                component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                meta: { title: '权限测试', permission: true },
            },
            {
                // 权限页面
                path: '/echarts',
                component: () => import(/* webpackChunkName: "permission" */ '../components/page/echarts/echarts.vue'),
                meta: { title: 'echarts' },
            },
            {
                path: '/403',
                component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                meta: { title: '403' },
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
