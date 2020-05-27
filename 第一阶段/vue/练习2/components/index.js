import App from "./app.js";
const template = `<div>
    <App/>
</div>`;
new Vue({
  el: "#app",
  template,
  components: {
    App,
  },
});
