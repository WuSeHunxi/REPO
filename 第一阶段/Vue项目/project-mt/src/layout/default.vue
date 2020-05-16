<template>
  <div class="layout-default">
    <el-container>
      <el-header>
        <my-header />
      </el-header>
      <el-main></el-main>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
import MyHeader from "../components/header/index";
export default {
  components: {
    MyHeader
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/public/layout.css";
</style>