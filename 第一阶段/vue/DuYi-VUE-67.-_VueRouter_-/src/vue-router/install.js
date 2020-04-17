import Link from "./components/link";
import View from "./components/view";

// defineReactive
//抽离install的功能文件
export default function install(Vue) {
  Vue.mixin({//混入：给每一个Vue实例添加钩子函数
    beforeCreate() {
      if (this.$options.router) {//
        this._router = this.$options.router;
        Vue.util.defineReactive(this, "_route", this._router.history.current);
      }
    },
  });

  //路由的属性：在路由的实例上可以找到，直接将属性添加到原型上
  Object.defineProperty(Vue.prototype, "$router", {
    //$router就是VueRouter的实例
    get() {
      return this.$root._router;
    },
  });

  Object.defineProperty(Vue.prototype, "$route", {
    get() {
      return this.$root._route;
    },
  });

  Vue.component("router-link", Link);

  Vue.component("router-view", View);
}
