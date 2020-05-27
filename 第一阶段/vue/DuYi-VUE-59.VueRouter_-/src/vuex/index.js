import applyMixin from './mixin'
//当使用Vue.use(Vuex)的时候会默认调用Vuex的install方法
/**
 * 安装函数
 * @param {*} Vue
 */
function install(Vue) {
  applyMixin(Vue);
}

class Store {
    //options：对象参数
  constructor(options) {
      this._vm=new Vue({
        data:{
            state:options.state||{}
        }
      });
    this.state=this._vm.state;
  }
}

export default {
  install,
  Store
};
