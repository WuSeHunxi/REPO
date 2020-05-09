import React from "react";
import Home from "./Home";
import Login from "./Login";
import Personal from "./Personal";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProtectedRouter from "./ProtectedRouter";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/login">登录</Link></li>
          <li><Link to="/personal">个人中心</Link></li>
        </ul>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRouter path="/personal" component={Personal} />
            {/* render和children的区别：render是匹配后才会运行，children无论是否匹配都会运行 */}
            {/* <Route path="/personal" render={ values => {
                            console.log(values)
                            return <h1>asdfdasdfa</h1>
                        }} /> */}
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}


