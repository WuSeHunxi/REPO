import React from "react";
import ReactDOM from "react-dom";

//React对象
// const obj = <span>这是一个span元素</span>;
// //jsx表达式
// const div = (<div>{obj}</div>);
// ReactDOM.render(div, document.getElementById("root"));

// const h1=<h1>he<span>hello world</span></h1>
// React.createElement("h1",{},React.createElement("span"),{},"span")
// ReactDOM.render("h1", document.getElementById("root"));

// const src =
//   "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2962719555,3613138778&fm=27&gp=0.jpg";
// const img=(
//     <img src={src} alt=""/>
// );
// const h = (
//   <h1>
//     <span>hahahah</span>
//   </h1>
// );
// ReactDOM.render(h, document.getElementById("root"));
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
console.log(element);
ReactDOM.render(element, document.getElementById("root"));
