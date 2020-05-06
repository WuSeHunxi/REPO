const template = `<div>
<h1>{{ title }}</h1>
      <input type="text" min="10" max="20" v-model="newProduct.name" />
      <input type="number" v-model="newProduct.stock" />
      <button @click="addItem">添加</button>
      <ul>
        <li v-for="(item,i) in products">
          <span>{{item.name}}</span>
          <button @click="decreaseNum(i)">-</button>
          <span v-if="item.stock===0">售罄</span>
          <span v-else>{{item.stock}}</span>
          <button @click="increaseNum(i)">+</button>
          <input type="number" :value="item.stock" />
          <button @click="removeById(i)">删除</button>
        </li>
      </ul></div>`;
const config = {
  el: "#app",
  template,
  data: {
    title: "商品和库存管理",
    products: [
      { name: "小米手机", stock: 10 },
      { name: "华为手机", stock: 5 },
      { name: "iphone", stock: 6 },
    ],
    newProduct: {
      name: "",
      stock: 0,
    },
  },
  methods: {
    addItem() {
      this.products.push(this.newProduct);
      this.newProduct = {
        name: "",
        stock: 0,
      };
    },
    removeById(i) {
      this.products.splice(i, 1);
      //   console.log(i)
    },
    decreaseNum(i) {
      this.products[i].stock--;
      if (this.products[i].stock <= 0) {
        this.products[i].stock = 0;
      }
    },
    increaseNum(i) {
      this.products[i].stock++;
    },
  },
  computed: {},
};

const vm = new Vue(config);
