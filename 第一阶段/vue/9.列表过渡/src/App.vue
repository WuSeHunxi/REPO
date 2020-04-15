<template>
  <div id="app">
    <base-demo></base-demo>
    <my-cmp></my-cmp>
    <base-cmp></base-cmp>
  </div>
</template>

<script>
import BaseDemo from './components/BaseDemo4';
import MyCmp from "./components/MyCmp";
import BaseCmp from "./components/BaseCmp";

export default {
  name: 'app',
  components: {
    BaseDemo,
    MyCmp,
    BaseCmp
  },
}
</script>
