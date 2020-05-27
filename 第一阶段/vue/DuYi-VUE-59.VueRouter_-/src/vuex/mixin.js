function vuexInit() {
  //拿到每一个组件的配置对象
  const options = this.$options;
  //分两种情况：根实例，非根实例
  if (options.store) {
    this.$store = options.store;
  } else {
    //非根实例：寻找爸爸
    if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

/**
 * 添加混入的函数
 * @param {*} Vue
 */
export default function applyMixin(Vue) {
  //在使用Vuex的时候就会挂在一个$store对象
  Vue.mixin({
    beforeCreate: vuexInit,
  });
}
