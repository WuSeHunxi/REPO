import Vue from "vue";
import Vuex from "vuex";
import {IN_CREMENT} from './typelists.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    studentList: [],
  },
  getters: {
    countAdd(state) {
    //   return (state.count += 9);
    },
  },
  mutations: {
    [IN_CREMENT] (state) {
      // 变更状态
      state.count++
    }
  },
  strict:true
});
