/**
 * 嵌套路由组件
 */

const config = {
  user: {
    root: "/user",
    update: "/update",
    pay: {
      root: "/pay",
      afterPay: "/after",
      before: "/before",
    },
  },
};

function setConfig() {
  //写一个回调函数
  _setConfig(config, "");
}

/**
 * 将该对象的每一个字符串属性，前面添加baseStr
 * 如果属性名为root，则直接添加baseStr
 * 如果属性名不是root，则添加baseStr/root属性值
 * 如果属性不是字符串，递归调用该方法
 * @param {*} obj
 * @param {*} baseStr
 */
function _setConfig(obj, baseStr) {
  const newBaseUrl = baseStr + (obj.root ? obj.root : "");
  for (let prop in obj) {
    const value = obj[prop];
    if (typeof value === "string") {
      if (value === "root") {
        obj[prop] = baseStr + value;
      } else {
        obj[prop] = newBaseUrl + value;
      }
    } else {
      //利用递归的嵌套路由一定时没有root的，因此他的前缀需要添加一些内容重新组合
      _setConfig(obj[prop], newBaseUrl);
    }
  }
}

setConfig();

export default config;
