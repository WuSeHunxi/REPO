import Due from "./index.js";
import { constructProxy } from "./proxy.js";
let uid = 0;
/**
 * 给Due添加初始化方法
 */
export function initMixin(Due) {
  Due.prototype._init = function (options) {
    const vm = this;
    /**
     * uid和isDue是Vue的两个基础属性
     */
    vm.uid = uid++;
    vm._isDue = true;
    /**
     * 初始化data
     * 初始化create方法
     * 初始化methods
     * 初始化computed
     * 初始化el并挂载
     */
    if (options && options.data) {
      vm._data = constructProxy(vm, options.data, "");
    }
    //挂载
    if (options && options.el) {
      let rootDom = Document.getElementById(el);
    }
  };
}
