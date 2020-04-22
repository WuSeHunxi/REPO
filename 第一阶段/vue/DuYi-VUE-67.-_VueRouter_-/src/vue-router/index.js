import install from "./install";
import History from "./history";

class VueRouter {
  //组件在router.js中，作为在VueRouter的实例中
  constructor(options) {
    //获得一个{组件名:'xxx'}形式的组件对象
    this.routeMap = this.createRouteMap(options.routes || []);
    this.history = new History();
    this.mode = options.mode || "hash";
    this.init();
    // console.log(this);
  }

  createRouteMap(routes) {
    //得到对象：路径对应组件
    const routeMap = {};
    for (let i = 0; i < routes.length; i++) {
      const route = routes[i];
      routeMap[route.path] = route.component;
    }
    return routeMap;
  }

  init() {
    if (this.mode === "hash") {
      location.hash ? "" : (location.hash = "/");

      document.addEventListener("DOMContentLoaded", () => {
        this.history.current.path = location.hash.slice(1);
      });

      window.addEventListener("hashchange", () => {
        this.history.current.path = location.hash.slice(1);
      });
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        this.history.current.path = location.pathname;
      });

      window.addEventListener("popstate", () => {
        this.history.current.path = location.pathname;
      });
    }
  }
}

//等价于Vue.use(VueRouter)的功能
VueRouter.install = install;

export default VueRouter;
