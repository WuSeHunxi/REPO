import App from "./app.js";
import Home from "./page/index.js";
import MoviePage from "./page/moviePage.js";
import MovieDetail from "./page/movieDetail.js";

const template = `<div>
    <App/>
</div>`;

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/movie", component: MoviePage },
    { path: "/movie/:id", component: MovieDetail },
  ],
  mode: "history",
});

new Vue({
  template,
  components: {
    App,
  },
  el: "#app",
  router,
});
