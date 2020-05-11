import Movie from "../components/Movie.js";
import movieDetail from "../services/movie.js";
import Loading from "../components/lodaing.js";

const template = `<div class="data-container">
    <Movie :data="movie"/>
    <Loading />
</div>`;

export default {
  components: {
    Movie,
    Loading,
  },
  data() {
    return {
      movie: null,
      isLoading: false,
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.isLoading = true;
    movieDetail.getMovies(id).then((resp) => {
      this.movie = resp;
      this.isLoading = false;
    });
  },
  template,
};
