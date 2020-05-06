const template = `<div><my-cmp></my-cmp></div>`;
const cmp = {
  template: `<h1>哈哈哈哈</h1>`,
};

const config = {
  el: "#app",
  data: {},
  template,
  components: {
    MyCmp: cmp,
  },
};
const vm = new Vue(config);
