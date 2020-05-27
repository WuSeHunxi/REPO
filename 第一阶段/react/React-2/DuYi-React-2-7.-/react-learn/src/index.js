import React from "react";
import ReactDOM from "react-dom";
import Tick from "./Tick";

// const tc = new TickControl();
// console.log(tc);

////父组件是TickControl，子组件是Tick
ReactDOM.render(<Tick number={10} />, document.getElementById("root"));
