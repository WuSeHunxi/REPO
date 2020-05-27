import React, { createElement } from "react";
import ReactDOM from "react-dom";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css";

const srcs = [src1, src2, src3];
let timer = null;
let index = 0;

function start() {
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 2000);
}

function render() {
  ReactDOM.render(
    <img src={srcs[index]} alt="" />,
    createElement.getElementById("root")
  );
}

function stop() {
  clearInterval(timer);
}

render();
start();

document.getElementById("root").onmouseenter = function () {
  stop();
};

document.getElementById("root").onmouseleave = function () {
  start();
};
