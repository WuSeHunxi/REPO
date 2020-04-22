<template>
  <div class="home container">
    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class="form-control" placeholder="搜索" v-model="inpVal" />
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in selectList" :key="person.id">
          <td>{{person.name}}</td>
          <td>{{person.phone}}</td>
          <td>{{person.email}}</td>
          <td>
            <router-link tag="button" :to="{name:'detail',params:{id:person.id}}">信息详情</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from "./Alert";

export default {
  name: "home",
  data() {
    return {
      personList: [],
      inpVal: ""
    };
  },
  methods: {
    getData() {
      this.$axios.get("http://localhost:3000/users").then(res => {
        if (res.status === 200) {
          // console.log(res.data);
          this.personList = res.data;
          console.log(res)
        }
      });
    }
  },
  computed: {
    selectList() {
      return this.personList.filter(person => {
        return person.name.includes(this.inpVal);
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
