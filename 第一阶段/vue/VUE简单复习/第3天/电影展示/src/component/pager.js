const template = `
<div class="pager">
    <a class="pager-item" :class="{disabled:current===1}" @click="change(1)">首页</a>
    <a class="pager-item" :class="{disabled:current===1}" @click="change(current-1)">上一页</a>  
    <a class="pager-item" v-for="item in numbers" :key="item" :class="{active:current===item}" @click="change(item)">{{item}}</a>   
    <a class="pager-item" :class="{disabled:current===pageNumber}" @click="change(current+1)">下一页</a>
    <a class="pager-item" :class="{disabled:current===pageNumber}" @click="change(pageNumber)">尾页</a> 
    <span class="pager-text">
        <i></i> 
        <i></i>
    </span>
</div>
`;
export default {
  template,
  //   data() {
  //     return {
  //       current: 1,
  //       total: 100,
  //       pageSize: 10,
  //       panelNumber: 5,
  //     };
  //   },
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 10,
    },
    pageSize: {
      type: Number,
      default: 5,
    },
    panelNumber: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.pageSize);
    },
    numbers() {
      var min = this.current - Math.floor(this.panelNumber / 2);
      if (min < 1) {
        min = 1;
      }
      var max = min + this.panelNumber - 1;
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      const arr = [];
      for (var i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  methods: {
    change(item) {
      if (item < 1) {
        item = 1;
      } else if (item > this.pageNumber) {
        item = this.pageNumber;
      } else if (this.current === item) {
        return;
      }
      this.$emit("changePage", item); //抛出来的参数就是$event
    },
  },
};
