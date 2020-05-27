import VNode from "../vdom/vnode.js";

export function initMount(Due) {
  Due.prototype.$mount = function (el) {
    let vm = this;
    let rootDom = document.getElementById(el);
    mount(this, rootDom);
  };
}

export function mount(vm, el) {
  //进行挂在
  vm._node = constructVnode(vm, elm, null);
  //进行预备渲染(建立渲染索引，通过模板找vnode,通过vnode找模板)
}

//配置虚拟dom
//elm对应的是真实的DOM节点
function constructVnode(vm, elm, parent) {
  //需要使用深度优先搜索
  let vnode = null;
  let children = [];
  let text = getNodeText(elm);
  let nodeType = elm.nodeType;
  let tag = elm.nodeName;
  //创建一个节点
  vnode = new VNode(tag, elm, children, text, data, parent, nodeType);
  let childs = vnode.elm.childNodes; //elm下的子节点
  for (let i = 0; i < childs.length; i++) {
    let childNodes = constructVnode(vm, childs[i], vnode);
    if (childNodes instanceof VNode) {
      vnode.children.push(childNodes);
    } else {
      vnode.children = vnode.children.concat(childNodes);
    }
  }
  return vnode;
}

//得到文本节点
function getNodeText(elm) {
  if (el.nodeType === 3) {
    return elm.nodeValue;
  } else {
    return "";
  }
}
