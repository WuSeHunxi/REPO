import MovieList from "./movielist.js";
import Pager from "./pager.js";
const template = `<div>
    <h1>App组件</h1>
    <MovieList/>
    <Pager/>
</div>`;
export default {
  template,
  components: {
    MovieList,
    Pager,
  },
};
