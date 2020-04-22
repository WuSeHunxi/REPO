import VueRouter from "vue-router";
import Vue from "vue";
import Customers from "./components/Customers";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Customers },
    { path: "/about", component: () => import("./components/About") },
    { path: "/add", component: () => import("./components/Add") },
    {
      path: "/detail/:id",
      name: "detail",
      props: true,
      component: () => import("./components/Detail"),
     
    },
    //动态获取路由参数（表示每个id值下面有一条数据）
    { path: "/edit/:id", component: () => import("./components/Edit") }
  ]
});
export default router;
