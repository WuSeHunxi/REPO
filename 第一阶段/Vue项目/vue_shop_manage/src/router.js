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
    component: () => import("./view/Home.vue"),
    redirect: "/welcome",
    children: [
      { path: "/welcome", component: () => import("./components/Welcome") },
      {
        path: "/users",
        component: () => import("./components/users/User.vue"),
      },
      {
        path: "/roles",
        component: () => import("./components/power/Role.vue"),
      },
      {
        path: "/rights",
        component: () => import("./components/power/Rights.vue"),
      },
      {
        path: "/reports",
        component: () => import("./components/report/Report.vue"),
      },
      {
        path: "/orders",
        component: () => import("./components/order/Order.vue"),
      },
      {
        path: "/goods",
        component: () => import("./components/goods/List.vue"),
      },
    ],
  },
];

export default new VueRouter({
  routes,
  mode: "history",
});
