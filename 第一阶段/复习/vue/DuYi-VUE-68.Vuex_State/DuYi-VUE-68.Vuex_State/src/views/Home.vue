<template>
  <div class="home">
    <button @click="$store.state.count ++">点击</button>
    {{ storeCount }}
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data () {
    return {
      count: 100,
    }
  },
  computed: {
    //使用辅助函数减少过多的计算属性的使用
    ...mapState({
      storeCount: 'count',// state => state.count + 10
    }),
  },
  created () {
    console.log(this.$store.state.count);
  }
}
</script>