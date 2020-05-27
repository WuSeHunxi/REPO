import React from "react";
import ReactDOM from "react-dom";
import FuncCmp from "./FuncCmp";
import ClassCmp from "./ClassCmp";

const cmp1 = <ClassCmp />;
const cmp2 = <ClassCmp />;
console.log(cmp1 === cmp2); //false

ReactDOM.render(
  <>
    <FuncCmp number={3} />
    <ClassCmp number="4" />
  </>,
  document.getElementById("root")
);
