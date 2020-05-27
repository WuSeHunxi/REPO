import React from "react";
import ReactDOM from "react-dom";
import Ball from "./components/Ball";

ReactDOM.render(
  <Ball xSpeed={100} ySpeed={100} left={100} top={100} bg={"#ff0"} />,
  document.getElementById("root")
);
