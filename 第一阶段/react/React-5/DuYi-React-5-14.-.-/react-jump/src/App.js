import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";

function App() {
  return (
    <Router
      getUserConfirmation={(msg, callback) => {
        callback(window.confirm(msg));
      }}
    >
      <nav>
        <NavLink
          to="/page1"
          style={{
            marginRight: 30,
          }}
          activeStyle={{
            background: "#ccc",
          }}
        >
          Page1
        </NavLink>
        <NavLink
          to="/page2"
          activeStyle={{
            background: "#ccc",
          }}
        >
          Page2
        </NavLink>
      </nav>
      <div>
        <Route path="/page1" component={Page1}></Route>
        <Route path="/page2" component={Page2}></Route>
      </div>
    </Router>
  );
}

export default App;
