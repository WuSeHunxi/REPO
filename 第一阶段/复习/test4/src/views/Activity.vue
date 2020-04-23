<template>
  <div class="activity">
    <div class="nav-list">
      <router-link :to="{ name: 'academic' }">学术研究</router-link>
      <router-link :to="{ name: 'download' }">资源下载</router-link>
      <router-link :to="{ name: 'personal' }">个人中心</router-link>
    </div>

    <div class="nav-conatiner">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
  a {
    text-decoration: none;
    /* color: #fff; */
    margin-left: 40px;
    color:#000;
  }
  a.router-link-active {
    font-weight: bold;
  }
  .nav-conatiner{
    margin-top: 40px;
    margin-left: 40px;
  }
</style>
