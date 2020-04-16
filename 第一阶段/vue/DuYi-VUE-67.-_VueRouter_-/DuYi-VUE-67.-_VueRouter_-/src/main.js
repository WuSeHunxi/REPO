import Vue from 'vue'
import App from './App.vue'
import router from './router';
import "./assets/reset.css";
import Vuex from "vuex";

Vue.use(Vuex);

new Vuex.Store();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
