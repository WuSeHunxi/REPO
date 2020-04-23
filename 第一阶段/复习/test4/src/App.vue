<template>
  <div id="app">
    <div class="box">
      <div class="logo">渡一教育</div>
      <div class="nav-list">
        <router-link :to="{ name: 'home' }">首页</router-link>
        <router-link :to="{ name: 'student' }">学员展示</router-link>
        <router-link :to="{ name: 'learn' }">课程学习</router-link>
        <router-link :to="{ name: 'about' }">关于</router-link>
        <router-link :to="{ name: 'activity' }">活动</router-link>
      </div>
    </div>
    <div class="nav-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: "app",
    component: {},
  };
</script>

<style scoped>
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    background-color: #3388ff;
  }

  .logo {
    padding-left: 100px;
  }

  .nav-list {
    padding-right: 100px;
  }

  a {
    margin-right: 40px;
    color: #000;
    text-decoration: none;
  }
  a.router-link-active {
    font-weight: bold;
    color: #fff;
  }
  .nav-container {
    padding-left: 200px;
    padding-top: 100px;
  }
</style>
