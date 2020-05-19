<template>
  <div class="m-header">
    <div class="logo"></div>
    <h1 class="title">Chicken Music</h1>
  </div>
</template>

<script>
  export default {
    name:'MHeader'
  }
</script>

<style scoped lang="stylus">
@import '~common/stylus/mixin'
@import "~common/stylus/variable" 
.m-header
  width :100%
  height :44px
  display :flex
  justify-content :center
  align-items :center
  .logo
    width :30px
    height :32px
    bg-image('./logo')
    background-repeat:no-repeat
    background-size: 100% 100%
    margin-right:$font-size-small-s 
  .title
    font-size:$font-size-large
    color:$color-theme
    font-weight:bold

</style>