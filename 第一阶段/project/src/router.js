import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./components/Home";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  {
    path: "/detail/:id",
    name: "detail",
    props: true,
    component: () => import("./components/Detail"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./components/Edit"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./components/About"),
  },
  { path: "/add", name: "add", component: () => import("./components/Add") },
];

export default new VueRouter({
  routes,
  mode: "history",
});
