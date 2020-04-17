import Vue from "vue";
import Vuex from "vuex";
import { COUNT_INCREMENT, UPDATE_OBJ, CHANGE_VALUE } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    studentList: [],
    obj: { a: "13" },
    msg: "",
  },
  getters: {
    countDouble: (state) => state.count * 2,
    countAdd: (state) => (num) => state.count + num,
    studentLength: (state) => state.studentList.length,
    studentJuveniles: (state) =>
      state.studentList.filter((student) => student.age < 18),
  },
  strict: true,
  mutations: {
    // increment(state, payload) {
    //   state.count += payload.amount;
    // },
    [COUNT_INCREMENT](state) {
      state.count++;
    },
    [UPDATE_OBJ](state) {
      Vue.set(state.obj, "b", 100);
    },
    [CHANGE_VALUE](state, { value }) {
      state.msg = value;
    },
  },
});
