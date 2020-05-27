import React from "react";
import ReactDOM from "react-dom";
import TickControl from "./TickControl";

const tc = new TickControl();
console.log(tc);

////父组件是TickControl，子组件是Tick
ReactDOM.render(
  <TickControl
    id="hello"
    onClicked={() => {
      console.log("hello");
    }}
  />,
  document.getElementById("root")
);
