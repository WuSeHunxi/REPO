import React from "react";
import ReactDOM from "react-dom";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css";

let index = 0;
let timer;
const srcs = [src1, src2, src3];

function render() {
  const img = <img src={srcs[index]} alt=""></img>;
  ReactDOM.render(img, document.getElementById("root"));
}

function start() {
  timer = setInterval(() => {
    index = (index + 1) % 3;
    render();
  }, 800);
}

function stop() {
  clearInterval(timer);
}
start();

document.getElementById("root").onmouseenter = function () {
  stop();
};

document.getElementById("root").onmouseleave = function () {
  start();
};
