import React from "react";
import ReactDOM from "react-dom";
import TickControl from "./TickControl";

// const tc = new TickControl();
// console.log(tc, tc.children);

////父组件是TickControl，子组件是Tick
ReactDOM.render(<TickControl number={10} />, document.getElementById("root"));
