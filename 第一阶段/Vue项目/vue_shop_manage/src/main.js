import Vue from "vue";
import App from "./App.vue";
import axios from "./http";
import router from "./router";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'

axios.interceptors.request.use((config)=>{
  config.headers.Authorization=window.sessionStorage.getItem('token');
  return config;
})

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
