import movieService from "../services/movie.js";

export default {
  namespace: true,
  state: {
    current: 1,
    total: 0,
    pageSize: 2,
    datas: [],
    isLoading: false,
  },
  mutations: {
    setState(state, newState = {}) {
      for (const prop in newState) {
        state[props] = newState[prop];
      }
    },
  },
  actions: {
    fetch(context) {
      context.commit("setState", { isLoading: true });
      movieService
        .getMovies(context.state.current, context.state.pageSize)
        .then((resp) => {
          context.commit("setState", resp);
          context.commit("setState", { isLoading: false });
        });
    },
  },
};
