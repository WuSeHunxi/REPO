<template>
  <div id="app">
    <m-header></m-header>
    <m-nav></m-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import MHeader from 'components/m-header/m-header'
import MNav from 'components/nav/m-nav'
export default {
  name: 'App',
  components:{
    MHeader,
    MNav
  }
}
</script>

<style lang="stylus" scoped>
</style>
