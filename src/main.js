import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small',
})

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-admin`
    const role = localStorage.getItem('ms_username')
    if (!role && to.path !== '/login') {
        next('/login')
    } else {
        next()
    }
})

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')
