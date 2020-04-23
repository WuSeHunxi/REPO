import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    studentList: [],
  },
  getters: {
    studentLength: (state) => state.studentList.length,
    studentJuvenilies: (state) =>
      state.studentList.filter((student) => student.age < 18),
  },
});
