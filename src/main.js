import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueI18n from 'vue-i18n'
import { messages } from './components/common/i18n'

Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small',
})

Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh',
    messages,
})

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-admin`
    const role = localStorage.getItem('ms_username')
    if (!role && to.path !== '/login') {
        next('/login')
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403')
    } else {
        next()
    }
})

new Vue({
    router,
    i18n,
    store,
    render: (h) => h(App),
}).$mount('#app')
