<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-nav nav">
            <router-link to="/" class="text-secondary">用户信息管理系统</router-link>
          </div>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/">主页</router-link>
            </li>
            <li>
              <router-link to="/about">关于我们</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/add">添加用户</router-link>
            </li>
          </ul>
        </div>
        <!--/.nav-collapse -->
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
