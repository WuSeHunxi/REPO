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
import TreeTable from 'vue-table-with-tree-grid'

Vue.use(ElementUI);
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'

// 请求头拦截
axios.interceptors.request.use(config => {
    NProgress.start()
    //需要授权API（在访问其他API的时候需要token），必须在请求头中使用Authorization字段提供token
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})


axios.interceptors.response.use(config => {
    NProgress.done()
    return config
})
Vue.prototype.$http = axios


Vue.config.productionTip = false

//注册组件
Vue.component('tree-table',TreeTable)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')