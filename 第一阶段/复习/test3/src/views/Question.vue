<template>
  <div class="question" v-if="question">
    <div class="title">问题：{{ question.title }}</div>
    <div class="others">
      <div
        class="prev"
        v-if="question.prevId"
        @click="handleClick(question.prevId)"
      >
        {{ question.prev }}
      </div>
      <div
        class="next"
        v-if="question.nextId"
        @click="handleClick(question.nextId)"
      >
        {{ question.next }}
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      //这个两个值都是路由传的参
      id: {
        type: [String, Number],
      },
      // name: {
      //   type: String,
      // },
    },
    data() {
      return {
        question: null,
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        // const { id } = this.$route.params;
        const { id } = this.$route.params;
        // const { name } = this.$route;
        this.$axios.get(`/question/${id}`).then((res) => {
          this.question = res;
          // console.log(name);
        });
      },
      handleClick(id) {
        this.$router.push({
          name: name,
          params: {
            id,
          },
        });
      },
    },
    watch: {
      $route: {
        handler() {
          this.getData();
        },
        immediate: true,
      },
    },
  };
</script>

<style scoped>
  .prev,
  .next {
    cursor: pointer;
    margin-top: 100px;
    cursor: pointer;
    font-size: 14px;
    /* text-decoration: none; */
  }
  .prev:hover,
  .next:hover {
    text-decoration: underline;
    color: #3f88ff;
  }

  .prev {
    float: left;
    margin-left: -100px;
  }

  .next {
    float: right;
    /* margin-right: -80px; */
  }
</style>
