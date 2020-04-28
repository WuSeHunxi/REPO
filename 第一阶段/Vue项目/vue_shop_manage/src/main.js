import Vue from "vue";
import App from "./App.vue";
import axios from "./http";
import router from "./router";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/";

axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});

Vue.filter("dateFormat", () => {
  const dt = new Date();
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + 1 + "").padStart(2, "0");
  const hh = (dt.getHours() + 1 + "").padStart(2, "0");
  const mm = (dt.getMinutes() + 1 + "").padStart(2, "0");
  const ss = (dt.getSeconds() + 1 + "").padStart(2, "0");
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
