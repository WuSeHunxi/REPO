import React from "react";
import * as Page from "./Page";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" exact>
          首页
        </NavLink>
        <NavLink to="/news" exact>
          新闻页
        </NavLink>
        <NavLink to="/personal" exact>
          个人中心
        </NavLink>
      </nav>
      <div>
        <Route exact path="/" component={Page.Home}>
          {(value) => {
            console.log(value);
          }}
        </Route>
        <Route exact path="/news" component={Page.News} />
        <Route exact path="/personal" component={Page.Personal} />
      </div>
    </Router>
  );
}

export default App;
