import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/global.css";
import "./assets/fonts/iconfont.css";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import TreeTable from "vue-table-with-tree-grid";
import VueQuillEditor from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.use(ElementUI);
Vue.filter("dateFormat", (originVal) => {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + 1 + "").padStart(2, "0");
  const hh = (dt.getHours() + 1 + "").padStart(2, "0");
  const mm = (dt.getMinutes() + 1 + "").padStart(2, "0");
  const ss = (dt.getSeconds() + 1 + "").padStart(2, "0");
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});

//全局组件注册
Vue.use(VueQuillEditor);

Vue.config.productionTip = false;
axios.defaults.baseURL = "https://www.liulongbin.top:8888/api/private/v1/";
//在访问其他API的时候需要有权限才能访问，因此需要一份Authorization字段，利用拦截器进行处理
axios.interceptors.request.use((config) => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});

Vue.component("tree-table", TreeTable);
Vue.prototype.$http = axios;
new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
