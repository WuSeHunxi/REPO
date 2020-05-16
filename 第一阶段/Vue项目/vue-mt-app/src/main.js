import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import router from './router'
import '@/assets/css/main.css'

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
