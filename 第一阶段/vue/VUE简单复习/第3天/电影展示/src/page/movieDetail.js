import MovieDetail from "../component/movieDetail.js";
const template = `<div><MovieDetail/></div>`;
export default {
  template,
  components: {
    MovieDetail,
  },
  mounted: {
    handle() {
      const id = this.$route.params.id;
      console.log(id);
    },
  },
};
