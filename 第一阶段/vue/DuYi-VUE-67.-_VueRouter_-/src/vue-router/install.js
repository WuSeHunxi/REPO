import Link from "./components/link";
import View from "./components/view";

// defineReactive
//抽离install的功能文件
export default function install(Vue) {
  Vue.mixin({//混入：给每一个Vue实例添加钩子函数
    beforeCreate() {
      if (this.$options.router) {//判断Vue实例中的参数是否有router，如下：
        /**
         * new Vue({
         *  render: h => h(App),
         *  router,
         * }).$mount('#app')
         */
        console.log(this);//Vue
        this._router = this.$options.router;
        //一旦页面发生改变了，就会重新渲染页面：监听的属性必须存在
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

  //注册全局组件
  Vue.component("router-link", Link);

  Vue.component("router-view", View);
}
