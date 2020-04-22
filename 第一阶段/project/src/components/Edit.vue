<template>
  <div class="edit container">
    <h1 class="page-header">修改用户</h1>
    <form @submit.prevent="updateInfo">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="person.name"/>
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="person.phone"/>
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="person.email"/>
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="person.education"/>
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input type="text" class="form-control" placeholder="graduationschool" v-model="person.graduationschool"/>
        </div>
        <div class="form-group">
          <label>职业</label>
          <input type="text" class="form-control" placeholder="profession" v-model="person.profession"/>
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <!--          <input type="text" class="form-control" placeholder="profile" v-model="customer.profile">-->
          <textarea class="form-control" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">修改</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit",
  data() {
    return {
      person: {}
    };
  },
  methods: {
    getData() {
      const id = this.$route.params.id;
      this.$axios.get("http://localhost:3000/users/" + id).then(res => {
        // console.log(res);
        this.person = res.data;
      });
    },
    updateInfo(e) {
      if(!this.person.name||!this.person.email||!this.person.phone){
          alert("请填好信息");
          return;
      }
      let updatePerson = {
        name: this.person.name,
        phone: this.person.phone,
        email: this.person.email,
        education: this.person.education,
        graduationschool: this.person.graduationschool,
        profession: this.person.profession,
        profile: this.person.profile
      };
      console.log(updatePerson);

      const id = this.$route.params.id;
      this.$axios
        .put("http://localhost:3000/users/" + id, updatePerson)
        .then(res => {
          //修改完之后需要跳回首页
          console.log(res);
          this.$router.push({
            path: "/home",
            query: {}
          });
        });
      e.preventDefault();
    }
  },
  mounted() {
    this.getData();
  }
};
</script>
<style scoped>
</style>