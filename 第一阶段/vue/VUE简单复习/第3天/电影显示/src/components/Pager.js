const template = `<div id="pager" class="pager">
    <a class="pager-item" :class="{disable:current===1}" @click="changePage(1)">首页</a>
    <a class="pager-item" :class="{disable:current===1}" @click="changePage(current-1)">上一页</a>
    <a class="pager-item" :class="{active:current===item}" v-for="item in numbers" @click="changePage(item)">{{item}}</a>
    <a class="pager-item" :class="{disable:current===pageNumber}" @click="changePage(current+1)">下一页</a>
    <a class="pager-item" :class="{disable:current===pageNumber}" @click="changePage(pageNumber)">尾页</a>
</div>`;
export default {
  props: ["total", "current", "panelNumber", "pageSize"],
  methods: {
    changePage(newPage) {
      if (newPage < 1) {
        this.current = 1;
      } else if (this.current > this.pageNumber) {
        this.current = this.pageNumber;
      } else if (newPage === this.current) {
        return;
      }
      this.current = newPage;
      //   console.log(0);
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.pageSize);
    },
    numbers() {
      let min = Math.floor(this.current - this.panelNumber / 2);
      let max = min + this.pageNumber - 1;
      let arr = [];
      if (min <= 1) {
        min = 1;
      }
      if (max > this.pageNumber) {
        max = this.pageNumber;
      }
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
  },
  template,
};
