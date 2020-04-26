<template>
  <div id="app">
    <!-- <student-add></student-add>
    <student-list></student-list>
    {{countAdd}} -->
    <button @click="handleClick">增加</button>{{count}}
  </div>
</template>

<script>

import { mapGetter, mapGetters, mapState } from "vuex";
import StudentList from "./components/StudentList";
import studentAdd from "./components/StudentAdd";
import { IN_CREMENT } from "./store/typelists";

export default {
  name: "App",
  components: {
    // StudentList,
    // studentAdd
  },
  methods: {
    handleClick() {
      this.$store.commit(IN_CREMENT)
    }
  },
  computed: {
    ...mapGetters(["countAdd"]),
    ...mapState(['count'])
  },
  mounted() {
    // console.log(this.$store.getters.countAdd);
  }
};
</script>

<style>
</style>
