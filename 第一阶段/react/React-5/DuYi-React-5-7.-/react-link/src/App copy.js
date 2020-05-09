import React from "react";
import { BrowerRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

function PageA() {
  return <div>组件A</div>;
}

function PageB() {
  return <div>组件B</div>;
}

function NavBar() {
  return (
    <div>
      <Link
        to="/a"
        style={{
          marginRight: 20,
        }}
      >
        去a页
      </Link>
      <Link to="/b">去b页</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/a" component={PageA}></Route>
      <Route path="/b" component={PageB}></Route>
    </Router>
  );
}

export default App;
