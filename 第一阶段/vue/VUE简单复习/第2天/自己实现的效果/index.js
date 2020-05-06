import App from "./App.js";

const template = `<div><App/></div>`;

const config = {
  el: "#app",
  template,
  components: {
    App,
  },
};
const vm = new Vue(config);
