import Movie from "./Movie.js";

const template = `<div><Movie :key="i" v-for="(item,i) in datas" :data="item"/></div>`;
export default {
  data() {
    return {};
  },
  props:['datas'],
  methods: {},
  components: {
    Movie,
  },
  template,
};
