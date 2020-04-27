import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: () => import("./components/Login.vue"),
  },
  { path: "/login", component: () => import("./components/Login.vue") },
  {
    path: "/home",
    component: () => import("./view/Home.vue"),redirect:'/welcome',
    children: [
      {path:'/welcome',component:()=>import('./components/Welcome')},
      {
        path: "/users",
        component: () => import("./components/users/User.vue"),
      },
    ],
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
