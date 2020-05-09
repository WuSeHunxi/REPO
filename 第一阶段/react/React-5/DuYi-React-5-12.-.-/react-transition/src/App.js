import React from "react";
import * as Page from "./Page";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";
import "./App.css";
// import TransitionRoute from "./TransitionRoute";

export default function App() {
  return (
    <div className="main">
      <Router>
        <div className="header">
          <NavLink to="/" exact>
            首页
          </NavLink>
          <NavLink to="/news" exact>
            新闻页
          </NavLink>
          <NavLink to="/personal" exact>
            个人中心
          </NavLink>
        </div>
        <div className="page-container">
          <Route  path="/" exact component={Page.Home}>
            {({ match }) => {
              return (
                <CSSTransition
                  in={match ? true : false}
                  timeout={500}
                  classNames={{
                    enter: "animated fast fadeInRight",
                    exit: "animated fast fadeOutLeft",
                  }}
                  mountOnEnter={true}
                  unmountOnExit={true}
                ></CSSTransition>
              );
            }}
          </Route>
          <Route exact path="/news" component={Page.News} />
          <Route exact path="/personal" component={Page.Personal} />
        </div>
        {/* <div className="page-container">
            <TransitionRoute path="/" exact component={Page.Home} />
            <TransitionRoute path="/news" exact component={Page.News} />
            <TransitionRoute path="/personal" exact component={Page.Personal} />
          </div> */}
      </Router>
    </div>
  );
}
