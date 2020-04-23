<template>
  <div class="about">
    关于
    <router-link id="a" to="./" tag="div">锚点区</router-link>
    <router-link tag="div" class="link" to="/">回首页</router-link>
  </div>
</template>

<style scoped>
  #a {
    margin-top: 1000px;
    cursor: pointer;
  }

  #a:hover{
    text-decoration: underline;
    color:#3f88ff;
  }

  .link {
    margin-top: 1000px;
  }
</style>
