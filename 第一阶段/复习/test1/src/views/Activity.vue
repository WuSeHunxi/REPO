<template>
    <div class="activity">
        <router-link :to="{name:'/activity/academic'}">学术讨论</router-link>
        <router-link :to="{name:'/activity/download'}">资源下载</router-link>
        <router-link :to="{name:'/activity/question'}">问题答疑</router-link>
        <div class="activity-view">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
a {
  margin-right: 10px;
  padding: 5px 10px;
  text-decoration: none;
}

a.router-link-exact-active {
  background-color: #3385ff;
  color: #fff;
}

.activity-view {
  margin-top: 40px;
  padding-left: 10px;
}
</style>