<template>
  <div class="academic">
      <ul>
          <router-link tag="li" :to="{name:'question',params:{id:question.id}}" v-for="question in questionList" :key="question.id">
              {{question.title}}
            </router-link>
      </ul>
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
    },
    methods: {
      getData() {
        this.$axios.get("/question").then((res) => {
          this.questionList = res;
          console.log(this.questionList);
        });
      },
    },
  };
</script>

<style scoped>
li{
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 10px;
}

li:hover{
    color: #388ff3;
    text-decoration: underline;
}

</style>
