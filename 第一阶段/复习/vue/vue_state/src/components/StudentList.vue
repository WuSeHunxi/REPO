<template>
  <div>
    <div class="student-list">
        <div>学生列表：</div>
        <ul>
            <li v-for="item in studentList" :key="item.id">姓名：{{item.name}} 年龄：{{item.age}}</li>
        </ul>
    </div>
    <button @click="addCount">点我</button>

    {{count}}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    addCount() {
      this.$store.state.count++;
    }
  },
  computed: {
    ...mapState(["count"]),
    ...mapState(['studentList'])
  }
};
</script>

<style scoped>
div,li{
    margin-bottom: 15px;
}
</style>