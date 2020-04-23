import App from "./App";
import axios from "./http";
import router from "./router";
import Vue from "vue";
import "./assets/reset.css";

Vue.config.productionTip = false;

Vue.prototype.$axios=axios;

new Vue({
  render: (h) => h(App),
  router,
  //   store,
}).$mount("#app");
