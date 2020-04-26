import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    //路由懒加载
    component: () =>
      import(
        /* webpackChunkName:"login_home_welcome"*/ "../components/Login.vue"
      ),
  },
  {
    path: "/home",
    name: "Home",
    redirect: "/welcome",
    component: () =>
      import(/* webpackChunkName:"login_home_welcome"*/ "../views/Home"),
    children: [
      {
        path: "/welcome",
        component: () =>
          import(
            /* webpackChunkName:"login_home_welcome"*/ "../components/Welcome"
          ),
      },
      {
        path: "/users",
        component: () =>
          import(
            /*webpackChunkName:"Users_Rights_Roles"*/ "../components/users/Users"
          ),
      },
      {
        path: "/rights",
        component: () =>
          import(
            /*webpackChunkName:"Users_Rights_Roles"*/ "../components/power/Rights"
          ),
      },
      {
        path: "/roles",
        component: () =>
          import(
            /*webpackChunkName:"Users_Rights_Roles"*/ "../components/power/Roles"
          ),
      },
      {
        path: "/categories",
        component: () =>
          import(
            /*webpackChunkName:"Cate_Params"*/ "../components/goods/Cate.vue"
          ),
      },
      {
        path: "/params",
        component: () =>
          import(
            /*webpackChunkName:"Cate_Params"*/ "../components/goods/Params.vue"
          ),
      },
      {
        path: "/goods",
        component: () =>
          import(
            /*webpackChunkName:"GoodsList_Add"*/ "../components/goods/List.vue"
          ),
      },
      {
        path: "/goods/add",
        component: () =>
          import(
            /*webpackChunkName:"GoodsList_Add"*/ "../components/goods/Add.vue"
          ),
      },
      {
        path: "/orders",
        component: () =>
          import(
            /*webpackChunkName:"Orders_Reports"*/ "../components/order/Order.vue"
          ),
      },
      {
        path: "/reports",
        component: () =>
          import(
            /*webpackChunkName:"Orders_Reports"*/ "../components/report/Report.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

//路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login") return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if (!tokenStr) return next("/login");
  next();
});
export default router;
