<template>
  <div class="el-row">
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
.el-row {
  &::after,
  &::before {
    display: block;
    content: "";
  }

  &::after {
    clear: both;
  }
}
</style>
