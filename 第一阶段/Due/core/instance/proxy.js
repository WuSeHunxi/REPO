/**
 * 利用Object.definedProperty给数组的方法添加代理
 * @param {*} obj
 * @param {*} func
 * @param {*} namespace
 * @param {*} vm 每一个项目都需要有一个vm
 */
const arrayProto = Array.prototype;
function defArrayFunc(obj, func, namespace, vm) {
  Object.defineProperty(obj, func, {
    enumerable: true,
    configurable: true,
    value: function (...args) {
      let original = arrayProto[func];
      const result = original.apply(this, args);

      return result;
    },
  });
}

function proxyArr(vm, arr, namespace) {
  let obj = {
    eleType: "Array",
    toString: function () {
      let result = "";
      for (let i = 0; i < arr.length; i++) {
        result += arr[i] + ",";
      }
      return result.substring(0, result.length - 2);
    },
    push() {},
    pop() {},
    shift() {},
    unshift() {},
  };
  defArrayFunc.call(vm, obj, "push", namespace, vm);
  defArrayFunc.call(vm, obj, "pop", namespace, vm);
  defArrayFunc.call(vm, obj, "shift", namespace, vm);
  defArrayFunc.call(vm, obj, "unshift", namespace, vm);
  arr.__proto__ = obj;
  return arr;
}

function constructObjectProxy(vm, obj, namespace) {
  let proxyObj = {};
  for (let prop in obj) {
    Object.defineProperty(proxyObj, prop, {
      configurable: true,
      get() {
        return obj[prop];
      },
      set: function (value) {
        obj[prop] = value;
      },
    });
    Object.defineProperty(vm, prop, {
      configurable: true,
      get() {
        return obj[prop];
      },
      set: function (value) {
        obj[prop] = value;
      },
    });
    //为了能够正常监听data中的对象或者数组
    if (obj[prop] instanceof Object) {
      proxyObj[prop] = constructProxy(
        vm,
        obj[prop],
        getNamespace(namespace, prop)
      );
    }
  }
  return proxyObj;
}

/**
 * 确保data中的对象和数组能够正确的取出来
 * @param {*} nowNameSpace 当前的namespace
 * @param {*} nowProp 当前的属性
 */
function getNamespace(nowNameSpace, nowProp) {
  if (nowNameSpace == null || nowNameSpace == "") {
    return nowProp;
  }
  if (nowProp == null || nowProp == "") {
    return nowNameSpace;
  } else {
    return nowNameSpace + "." + nowProp;
  }
}
/**
 * 代理的时候分三种情况：数组 对象 其他类型的，数组和对象分别对应不同的代理函数
 *
 * 需要知道哪个属性被修改了，然后才能将页面上的内容进行更新，
 * 所以我们必须先能够捕获修个的这个事件，因此需要使用代理的方式
 * 实现监听属性的修改
 * @param {*} vm Due对象
 * @param {*} obj
 * @param {*} namespace
 */
export function constructProxy(vm, obj, namespace) {
  //需要用到递归
  if (obj instanceof Array) {
    proxyObj = new Array(obj, length);
    for (let i = 0; i < obj.length; i++) {
      proxyObj[i] = constructProxy(vm, obj[i], namespace);
    }
    proxyObj = proxyArr(vm, obj, namespace);
  } else if (obj instanceof Object) {
    proxyObj = constructObjectProxy(vm, obj, namespace);
  } else {
    throw new Error("error");
  }
}
