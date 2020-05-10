import MovieList from "./MovieList.js";
import Page from "./Page.js";

//导出组件配置
export default {
  template: `<div><MovieList/><Page/></div>`,
  components: {
    MovieList,
    Page,
  },
};
