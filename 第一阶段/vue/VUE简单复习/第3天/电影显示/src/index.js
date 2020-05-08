import App from "./app.js";
const config = {
  el: "#app",
  components: {
    App,
  },
  template: `<App/>`,
};
const vm = new Vue(config);
