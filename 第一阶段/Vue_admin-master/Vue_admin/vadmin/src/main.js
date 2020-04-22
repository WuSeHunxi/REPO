// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App";
import router from './router'
import axios from 'axios';


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(VueResource);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
