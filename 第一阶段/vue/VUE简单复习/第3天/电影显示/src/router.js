import Home from "./pages/index.js";
import Movie from "./pages/moviePage.js";
import MovieDetail from "./pages/movieDetail.js";
import Login from "./pages/login.js";
import store from "./pages/index";

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    {
      path: "/movie",
      component: Movie,
      meta: {
        needLogin: true,
      },
    },
    { path: "/movie/:id", component: MovieDetail },
    { path: "/login", component: Login },
  ],
  mode: "hash",
});

export default router;
