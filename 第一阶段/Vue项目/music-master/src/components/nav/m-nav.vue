<template>
  <div class="m-nav">
    <router-link tag="div" class="nav-item" to="/recommend">
      <span class="item-link">推荐</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/singer">
      <span class="item-link">歌手</span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/rank">
      <span class="item-link">排行
      </span>
    </router-link>
    <router-link tag="div" class="nav-item" to="/search">
      <span class="item-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .m-nav
    display flex
    height 44px
    line-height 44px
    .nav-item
      flex-grow 1
      text-align center
      color $color-text-l
      font-size $font-size-medium
      &.router-link-active
        .item-link
          color $color-theme
          border-bottom 2px solid $color-theme


</style>
