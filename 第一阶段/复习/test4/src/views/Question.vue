<template>
  <div class="question" v-if="question">
    <div class="title">问题：{{ question.title }}</div>
    <div class="other">
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
    data() {
      return {
        question: null,
      };
    },
    props: {
      id: {
        type: [String, Number],
      },
    },
    mounted() {
      //   this.getData();
    },
    methods: {
      getData() {
        const { id } = this;
        this.$axios("/question/" + id).then((res) => {
          this.question = res;
          //   console.log(this.question);
        });
      },
      handleClick(id) {
        this.$router.push({
          name: name,
          params: { id },
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
