import Movie from "./movie.js";
const template = `<div class="data-container">
  <Movie v-for="item in movies" :key="item._id" :data="item" @click="getMovieDetail"/>
</div>`;
export default {
  template,
  components: {
    Movie,
  },
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    getMovieDetail() {
      const id = this.$route.id;
      console.log(id);
    },
  },
};
