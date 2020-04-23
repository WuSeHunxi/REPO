import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(ElementUI);
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// 请求头拦截
axios.interceptors.request.use(config => {
    NProgress.start()
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})

axios.interceptors.response.use(config => {
    NProgress.done()
    return config
})
Vue.prototype.$http = axios


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')