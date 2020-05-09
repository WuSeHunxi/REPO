import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
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
      <NavLink
        activeClassName="selected"
        activeStyle={{ background: "#ccc" }}
        to="/a"
        style={{
          marginRight: 20,
        }}
      >
        去a页
      </NavLink>
      <NavLink
        to="/b"
        style={{ marginRight: 20 }}
        activeStyle={{
          background: "#ff0",
        }}
      >
        去b页
      </NavLink>
      <NavLink to={{ pathname: "/c", hash: "#abc", serach: "?a=1&b=2" }}>
        去C页
      </NavLink>
      <NavLink
        to="/xyz"
        style={{
          marginLeft: 20,
        }}
      >
        去其他页
      </NavLink>
    </div>
  );
}

function PageC() {
  return <h1>C组件</h1>;
}

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/a" component={PageA}></Route>
        <Route path="/b" component={PageB}></Route>
        <Route path="/c" component={PageC}></Route>
        {/* from 中的地址会保存到to中 */}
        <Redirect from="/xyz/:id" to="/b/:id" />
      </Switch>
    </Router>
  );
}

export default App;
