import VueRouter from "vue-router";
import Vue from "vue";
import Home from "./views/Home";
import auth from "./utils/auth";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "home", component: Home },
  { path: "/learn", name: "learn", component: () => import("./views/Learn") },
  {
    path: "/student",
    // name: "student",
    components: () => import("./views/Student"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/About"),
    beforeEnter(to, from, next) {
      next();
    },
    meta: {
      requiresLogin: true,
      backAsk: true,
    },
  },
  {
    path: "/activity",
    redirect: "/activity/academic",
  },
  {
    path: "/activity",
    // name: "activity",
    component: () => import("./views/Activity"),
    redirect: "/acivity/academic",
    meta: {
      requiresLogin: true,
      backAsk: true,
    },
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
    path: "/activity/academic/question/:id",
    name: "question",
    component: () => import("./views/Question"),
    // props: true,
    props: (route) => ({
      id: route.params.id,
      // query: route.query.q,
    }),
  },
  { path: "/login", component: () => import("./views/Login") },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.hash) {
        return { selector: to.hash };
      }
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  const isRequiresLogin = to.matched.some((item) => item.meta.requiresLogin);
  if (isRequiresLogin) {
    const isLogin = auth.isLogin();
    if (isLogin) {
      next();
    } else {
      const isToLogin = window.confirm("要登录后才可以浏览，要去登录吗？");

      isToLogin ? next("/login") : next(false);
    }
  } else {
    next();
  }
});

export default router;
