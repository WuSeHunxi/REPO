<template>
  <div id="app">
    <div class="nav-box">
      <div class="logo" @click="handleClick">渡一教育</div>
      <div class="nav-list">
        <router-link :to="{ name: 'home' }">首页</router-link>
        <router-link :to="{ name: 'learn' }">课程学习</router-link>
        <router-link to="/student">学员展示</router-link>
        <router-link :to="{ name: 'about' }">关于</router-link>
        <router-link to="/activity">社区</router-link>
      </div>
    </div>
    <div class="nav-container">
      <transition>
        <router-view></router-view>
        <!-- <router-view style="marginBottom:30px"></router-view>
        <router-view name="learn"></router-view> -->
      </transition>
    </div>
  </div>
</template>
<script>
  export default {
    name: "app",
    components: {},
    methods: {
      handleClick() {
        this.$router.push("/home");
        console.log(this.$router);
      },
    },
  };
</script>
<style scoped>
  .logo {
    height: 50px;
    line-height: 50px;
    color: #fff;
    background-color: #3385ff;
    padding-left: 100px;
  }
  .nav-box {
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    color: #fff;
    align-items: center;
    background-color: #3385ff;
    justify-content: space-between;
  }
  .nav-list {
    padding-right: 200px;
  }

  .nav-list a {
    margin-left: 40px;
    color: #fff;
    text-decoration: none;
  }

  .nav-list a.router-link-active {
    font-weight: bold;
  }
  .nav-container {
    padding-top: 100px;
    padding-left: 200px;
  }
  .v-enter {
    transform: translateX(1000px);
  }
  .v-enter-active {
    transition: all 0.3s;
  }
  .v-enter-to {
    transform: translateX(0px);
  }
</style>
