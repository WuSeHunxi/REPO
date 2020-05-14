const data = {
  name: "shanshan",
  age: 18,
  shan: {
    name: "shanshan",
    age: 18,
    obj: {},
  },
  arr: [1, 2, 3],
};

//对象使用Object-defineProperty，数组使用原方法+render()
function defineReacttive(data, key, value) {
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newVal) {
      if (value === newVal) {
        return;
      }
      value = newVal;
      render();
    },
  });
}

function render() {
  console.loh("页面渲染了");
}

function observer(data) {
  if (Array.isArray(data)) {
    data.__proto__ = arrayMethods;
    return;
  }
  if (typeof data === "object") {
    for (const ky in data) {
      defineReactive(data, key, data[key]);
    }
  }
}

const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
["push", "pop", "shift", "unshift", "sort", "splice", "reverse"].forEach(
  (method) => {
    arrayMethods[method] = function () {
      arrayProto[method].call(this, ...arguments);
      render();
    };
  }
);

function $set(data, key, value) {
  if (Array.isArray(data)) {
    data.splice(key, 1, value);
    return;
  }
  defineReactive(data, key, value);
  render();
  return value;
}

function $delete(data, key) {
  if (Array.isArray(data)) {
    data.splice(key, 1);
    return;
  }
  delete data[key];
  return;
}

observer(data);
