<template>
  <div class="add container">
    <h1 class="page-header">添加用户</h1>
    <form @submit.prevent="addInfo">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" placeholder="name" v-model="person.name" />
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control" placeholder="phone" v-model="person.phone" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control" placeholder="email" v-model="person.email" />
        </div>
        <div class="form-group">
          <label>学历</label>
          <input type="text" class="form-control" placeholder="education" v-model="person.control" />
        </div>
        <div class="form-group">
          <label>毕业学校</label>
          <input
            type="text"
            class="form-control"
            placeholder="graduationschool"
            v-model="person.graduationschool"
          />
        </div>
        <div class="form-group">
          <label>职业</label>
          <input
            type="text"
            class="form-control"
            placeholder="profession"
            v-model="person.profession"
          />
        </div>
        <div class="form-group">
          <label>个人简介</label>
          <!--          <input type="text" class="form-control" placeholder="profile" v-model="customer.profile">-->
          <textarea class="form-control" rows="10"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">添加</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {}
    };
  },
  methods: {
    addInfo() {
      if (!this.person.name || !this.person.phone || !this.person.email) {
        alert("请添加对应的信息");
        return;
      }
      let newPerson = {
        name: this.person.name,
        phone: this.person.phone,
        email: this.person.email,
        education: this.person.education,
        graduationschool: this.person.graduationschool,
        profession: this.person.profession,
        profile: this.person.profile
      };
      this.$axios.post("http://localhost:3000/users", newPerson).then(res => {
        // console.log(res);
        this.$router.push({
          path: "/home"
        });
      });
    }
  }
};
</script>
<style scoped>
</style>