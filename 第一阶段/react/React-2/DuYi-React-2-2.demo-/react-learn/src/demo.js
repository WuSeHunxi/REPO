import React from "react";
import ReactDOM from "react-dom";
import src1 from "./assets/1.jpg";
import src2 from "./assets/2.jpg";
import src3 from "./assets/3.jpg";
import "./index.css";

const srcs = [src1, src2, src3];
let timer = null;
let index = 0;
function render() {
  ReactDOM.render(
    <img src={srcs[index]} alt="" />,
    document.getElementById("root")
  );
}

function start() {
  timer = setInterval(() => {
    index = (index + 1) % 3;
  }, 2000);
}

render();
start();

function stop() {
  clearInterval(timer);
}

document.getElementById("root").onmouseenter = function () {
  stop();
};

document.getElementById("root").onmouseleave = function () {
  start();
};
