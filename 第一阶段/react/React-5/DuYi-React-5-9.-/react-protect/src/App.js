import React from "react";
import Home from "./Home";
import Login from "./Login";
import Personal from "./Personal";
import { BrowerRouter as Router, Route, Link, Switch } from "";
import ProtectedRouter from "./ProtectedRouter";

function App() {
  return (
    <Router>
      <Switch>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/login">登录</Link>
          <Link to="/personal">个人中心</Link>
        </nav>
        <Route path="/login" component={Login} />
        <ProtectedRouter path="/personal" component={Personal} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
