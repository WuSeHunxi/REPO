<template>
  <div class="home">
    <button @click="handleClick">点击</button>
    {{ storeCount }}
    {{ countDouble }}
    {{ countAdd(3) }}
    <input type="text" @input="handleInput" :value="msg" />{{ msg }}
    <input type="text" v-model="msg" />{{ msg }}
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations } from "vuex";
  import {
    COUNT_INCREMENT,
    UPDATE_OBJ,
    CHANGE_VALUE,
  } from "../store/mutation-types";
  export default {
    data() {
      return {
        count: 100,
      };
    },
    methods: {
      handleClick() {
        // this.increment({ amount: 10 });
        //this.increment(10);
        // this.$store.commit("increment", {
        //   amount: 10,
        // });
        this.$store.commit(COUNT_INCREMENT);
        this.$store.commit(UPDATE_OBJ);
        console.log(this.obj); //使用Vue.set()方法成功更改了obj
      },
      handleInput(e) {
        this.$store.commit(CHANGE_VALUE, { value: e.target.value });
      },
      // ...mapMutations(["increment"]),
    },
    computed: {
      ...mapState({
        storeCount: "count", // state => state.count + 10
      }),
      ...mapState(["obj"]),
      ...mapGetters(["countAdd", "countDouble"]),
      ...mapState(["msg"]),
      msg: {
        get() {
          return this.$store.state.msg;
        },
        set(value) {
          this.$store.commit(CHANGE_VALUE, { value });
        },
      },
    },
    created() {
      console.log(this.$store.state.count);
    },
  };
</script>
