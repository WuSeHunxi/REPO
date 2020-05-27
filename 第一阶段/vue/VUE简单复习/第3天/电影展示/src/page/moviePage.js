import MovieList from "../component/movielist.js";
import Pager from "../component/pager.js";
import movies from "../component/mockDatas.js";
// import movieService from "../services/movieService.js";

const template = `<div>
    <MovieList :movies="moviePage"/>
    <Pager :current="current" :total="total" :page-size="pageSize" @changePage="handlePageChange"/>
</div>`;

export default {
  template,
  components: {
    MovieList,
    Pager,
  },
  data() {
    return {
      movies,
      current: 1,
      total: movies.length,
      pageSize: 2,
      panelNumber: 5,
    };
  },
  computed: {
    moviePage() {
      return this.movies.slice(
        (this.current - 1) * this.pageSize,
        this.current * this.pageSize
      );
    },
  },
  methods: {
    // setMovies() {
    //   movieService.getMovies(this.current, this.pageSize).then((res) => {
    //     this.total = res.total;
    //     this.movies = res.datas;
    //   });
    // },
    handlePageChange() {
      // this.setMovies();
      this.current = newPage;
    },
  },
};
