import MovieList from "./components/MovieList.js";
import Pager from "./components/Pager.js";
import movieService from "./services/movie.js";

const template = `<div>
<MovieList :datas="datas"/>
<Pager :current="page" :total="total" :page-size="pageSize" :panelNumber="5"/>
</div>`;
export default {
  data() {
    return {
      page: 1,
      total: 0,
      pageSize: 3,
      datas: [],
    };
  },
  mounted() {
    this.setMovies();
  },
  methods: {
    async setMovies() {
      let datas = await movieService.getMovies(this.page, this.pageSize);
      this.total = datas.total;
      this.datas = datas.datas;
      console.log(datas);
    },
  },
  components: {
    MovieList,
    Pager,
  },
  template,
};
