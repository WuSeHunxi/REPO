export default {
  functional: true,
  render (h, { parent }) {//函数式组件：没有this，但是存在上下文context，可以通过上下文获取父组件
    const routeMap = parent.$router.routeMap;
    const path = parent.$route.path;
    return h(routeMap[path]);//组件执行
  }
};