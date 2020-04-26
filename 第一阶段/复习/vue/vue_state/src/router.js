import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    // {path:"/list",components:()=>import('./components/StudentList')}
];

export default new VueRouter({
  routes,
  mode: "history",
});
