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
                component: () => import('../components/page/home/Dashboard.vue'),
                meta: { title: '系统首页' },
            },
            {
                path: '/table',
                component: () => import('../components/page/table/BaseTable.vue'),
                meta: { title: '基础表格' },
            },
            {
                path: '/tabs',
                component: () => import('../components/page/form/Tabs.vue'),
                meta: { title: 'tab选项卡' },
            },
            {
                path: '/form',
                component: () => import('../components/page/form/BaseForm.vue'),
                meta: { title: '基本表单' },
            },
            {
                // 富文本编辑器组件
                path: '/editor',
                component: () => import('../components/page/form/VueEditor.vue'),
                meta: { title: '富文本编辑器' },
            },
            {
                // markdown组件
                path: '/markdown',
                component: () => import('../components/page/form/Markdown.vue'),
                meta: { title: 'markdown编辑器' },
            },
            {
                // 图片上传组件
                path: '/upload',
                component: () => import('../components/page/form/Upload.vue'),
                meta: { title: '文件上传' },
            },
            {
                path: '/icon',
                component: () => import('../components/page/icons/baseIcon.vue'),
                meta: { title: '自定义图标' },
            },
            {
                // vue-schart组件
                path: '/charts',
                component: () => import('../components/page/charts/BaseCharts.vue'),
                meta: { title: 'schart图表' },
            },
            {
                // echarts组件
                path: '/echarts',
                component: () => import('../components/page/charts/echarts.vue'),
                meta: { title: 'echarts图表' },
            },
            {
                // highcharts组件
                path: '/highcharts',
                component: () => import('../components/page/charts/highcharts.vue'),
                meta: { title: 'highcharts图表' },
            },
            {
                // 拖拽列表组件
                path: '/drag',
                component: () => import('../components/page//drag/DragList.vue'),
                meta: { title: '拖拽列表' },
            },
            {
                // 拖拽Dialog组件
                path: '/dialog',
                component: () => import('../components/page/drag/DragDialog.vue'),
                meta: { title: '拖拽弹框' },
            },
            {
                // 国际化组件
                path: '/i18n',
                component: () => import('../components/page/I18n.vue'),
                meta: { title: '国际化' },
            },
            {
                // 权限页面
                path: '/permission',
                component: () => import('../components/page/permission/Permission.vue'),
                meta: { title: '权限测试', permission: true },
            },
            {
                path: '/404',
                component: () => import('../components/page/permission/404.vue'),
                meta: { title: '404' },
            },
            {
                path: '/403',
                component: () => import('../components/page/permission/403.vue'),
                meta: { title: '403' },
            },
            {
                // 百度地图
                path: '/baidu',
                component: () => import('../components/page/map/baiduMap.vue'),
                meta: { title: '百度地图' },
            },
            {
                // 百度地图
                path: '/gaode',
                component: () => import('../components/page/map/gaodeMap.vue'),
                meta: { title: '高德地图' },
            },
            {
                // 视频播放
                path: '/video',
                component: () => import('../components/page/player/video.vue'),
                meta: { title: '视频播放' },
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
    // mode: 'history',
    routes,
})

export default router
