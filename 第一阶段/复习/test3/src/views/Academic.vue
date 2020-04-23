<template>
  <div class="academic">
    <!-- <ul> -->
    <router-link
      tsg="li"
      class="nav"
      v-for="question in questionList"
      :key="question.id"
      :to="{ name: 'question', params: { id: question.id } }"
    >
      {{ question.title }}
    </router-link>
    <!-- </ul> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        questionList: [],
      };
    },
    mounted() {
      this.getData();
      //   console.log(0);
    },
    methods: {
      getData() {
        this.$axios.get("/question").then((res) => {
          this.questionList = res;
        });
      },
    },
  };
</script>

<style scoped>
  li.nav {
    cursor: pointer;
    color: #000;
    margin-top: 10px;
  }
  .nav:hover {
    text-decoration: underline;
    color: #3880ff;
  }
</style>
