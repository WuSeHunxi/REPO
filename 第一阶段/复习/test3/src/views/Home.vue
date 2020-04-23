<template>
  <div class="home">
    首页

    <router-link to="/about#a">去关于</router-link>
    <button @click="$store.state.count++">点击</button>
    {{ count }}
    <div class="test">测试</div>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  export default {
    data() {
      return {
        // count: 100,
      };
    },
    computed: {
      ...mapState(["count"]),
    },
    created() {
      console.log(this.count);
    },
  };
</script>

<style scoped>
  .test {
    margin-top: 1000px;
  }
</style>
