<template>
  <div id="app">
    <!-- <base-demo></base-demo> -->
    <my-cmp></my-cmp>
  </div>
</template>

<script>
import BaseDemo from './components/BaseDemo4';
import MyCmp from "./components/MyCmp";
export default {
  name: 'app',
  components: {
    BaseDemo,
    MyCmp
  },
}
</script>