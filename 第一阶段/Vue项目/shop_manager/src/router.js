import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: () => import("./components/Login"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("./components/Login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/welcome",
    component: () => import("./views/Home"),
    children: [
      { path: "/welcome", component: () => import("./components/Welcome") },
      { path: "/users", component: () => import("./components/users/Users") },
      { path: "/rights", component: () => import("./components/power/Roles") },
      { path: "/roles", component: () => import("./components/power/Rights") },
      {
        path: "/categories",
        component: () => import("./components/goods/Cate"),
      },
      { path: "/params", component: () => import("./components/goods/Params") },
      { path: "/goods", component: () => import("./components/goods/List") },
      {path:"/goods/add",component:()=>import('./components/goods/Add')},
      {path:"/orders",component:()=>import ('./components/order/Order.vue')},
      {path:"/reports",component:()=>import('./components/report/Report.vue')}
    ],
    
  },
  
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
