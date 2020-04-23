import VueRouter from "vue-router";
import vue from "vue";
import Vue from "vue";
import auth from './utils/auth'

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: () => import("./views/Home") },
  {
    path: "/student",
    name: "student",
    component: () => import("./views/Student"),
  },
  { path: "/learn", name: "learn", component: () => import("./views/Learn") },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/About"),
    meta: { requiresLogin: true, backAsk: true },
  },
  {
    path: "/activity",
    name: "activity",
    redirect: "/activity/academic",
    component: () => import("./views/Activity"),
    meta: { requiresLogin: true, backAsk: true },
    children: [
      {
        path: "/activity/academic",
        name: "academic",
        component: () => import("./views/Academic"),
      },
      {
        path: "/activity/download",
        name: "download",
        component: () => import("./views/Download"),
      },
      {
        path: "/activity/personal",
        name: "personal",
        component: () => import("./views/Personal"),
      },
    ],
  },
  {
    path: "/question/:id",
    name: "question",
    props: true,
    component: () => import("./views/Question"),
  },
  {path:"/login",name:'login',component:()=>import('./views/Login')}
];

const router = new VueRouter({
  routes,
  mode: "history",
});

router.beforeEach((to, from, next) => {
  const isRequiresLogin = to.matched.some((item) => item.meta.requiresLogin);
  if (isRequiresLogin) {
    // console.log(0)
    const isLogin=auth.isLogin();
    if(isLogin){
      next();
    }else{
      const isToLogin=window.confirm("要登录才可以访问浏览器哦~~~");
      isToLogin?next('/login'):next(false);
    }
  } else {
    next();
  }
});

export default router;
