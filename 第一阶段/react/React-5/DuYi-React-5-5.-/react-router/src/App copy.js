import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function A(props) {
  return (
    <div>
      <h1>A组件</h1>
      <button
        onClick={() => {
          props.history.push("/b");
        }}
      >
        跳转到B组件
      </button>
    </div>
  );
}

function B(props) {
  return (
    <div>
      <h1>B组件</h1>
      <button
        onClick={() => {
          props.history.push("/a");
          console.log(props.location.state);
        }}
      >
        跳转到A组件
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
    </Router>
  );
}
