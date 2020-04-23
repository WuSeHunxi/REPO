import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI)
Vue.config.productionTip = false
axios.defaults.baseURL="https://www.liulongbin.top:8888/api/private/v1/"
//在访问其他API的时候需要有权限才能访问，因此需要一份Authorization字段，利用拦截器进行处理
axios.interceptors.request.use(config=>{
  config.headers.Authorization=window.sessionStorage.getItem('token');
  return config;
})

Vue.prototype.$http=axios;
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
