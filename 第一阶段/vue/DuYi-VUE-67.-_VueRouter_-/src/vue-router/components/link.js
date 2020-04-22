//组件文件
export default {
  props: {//在标签中添加的属性
    to: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: "a",
    },
  },
  methods: {
    //只有当点击的标签不是a标签的时候利用点击事件
    handleClick() {//点击之后地址发生改变
      const mode = this.$router.mode;//this是VueComponent

      if (mode === "hash") {
        location.hash = this.to;//url的地址
      } else {
        history.pushState(null, null, this.to);
        this.$router.history.current.path = this.to;
      }
    },
  },
  //渲染函数的写法
  render(h) {
    const data = {};
    // console.log(this);
    const to = this.to;
    const mode = this.$router.mode;

    //配置第二个参数
    if (this.tag === "a" && mode === "hash") {
      const href = "#" + to;
      data.attrs = { href };
    } else {
      data.on = { click: this.handleClick };
    }

    //在router-link标签中添加的内容是默认插槽
    return h(this.tag, data, this.$slots.default);//组件执行（渲染）
  },
};
