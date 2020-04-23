import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
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
    ],
  },
];

const router = new VueRouter({
  routes,
  mode:'history'
});

router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});

export default router;
