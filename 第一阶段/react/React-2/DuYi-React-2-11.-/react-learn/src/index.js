import React from "react";
import ReactDOM from "react-dom";
// import Comp from "./Comp";
import MyComp from "./MyComp";

ReactDOM.render(
  // <Comp content1={<h2>第2组元素内容</h2>} content2={<h2>第3组元素内容</h2>}>
  //   <h2>第1组元素内容</h2>
  // </Comp>
  <MyComp children={<div>哈哈哈哈哈</div>}/>,
  document.getElementById("root")
);
