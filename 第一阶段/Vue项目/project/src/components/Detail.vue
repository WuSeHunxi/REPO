<template>
  <div class="detail container">
    <router-link :to="{name:'home'}" class="btn brn-default">返回</router-link>
    <h1 class="page-header">
      <span class="pull-right">
        <router-link class="btn btn-primary" :to="{name:'edit',params:{id:person.id}}">编辑</router-link>
        <button class="btn btn-danger" @click="delectInfo">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon plyphicon-asterisk">{{person.name}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon plyphicon-plus">{{person.email}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{person.education}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{person.graduationschool}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-asterisk">{{person.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus">{{person.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: ""
    };
  },
  methods: {
    delectInfo() {},
    getData() {
      const id = this.$route.params.id;
      //   console.log(this)
      this.$axios.get("http://localhost:3000/users/" + id).then(res => {
        // console.log(res);
        this.person = res.data;
      });
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped>
</style>