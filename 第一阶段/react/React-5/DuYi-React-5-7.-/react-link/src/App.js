import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routerConfig from "./RouteConfig";

// console.log(routerConfig.user.update);

function User({ match }) {
  // console.log(match);
  return (
    <div>
      <p>User组件</p>
      <p>
        <Link
          // to="/user/update"
          // to={`${match.url}/update`}
          to={routerConfig.user.update}
          style={{
            marginRight: 30,
          }}
        >
          用户信息
        </Link>
        {/* <Link to="/user/pay">充值</Link> */}
        <Link to={`${match.url}/pay`}>充值</Link>
      </p>
      <div
        style={{
          width: 500,
          height: 500,
          background: "lightblue",
          border: "2px solid",
          margin: "0 auto",
        }}
      >
        <Route path="/user/update" component={UserUpdate}></Route>
        <Route path="/user/pay" component={UserPay}></Route>
      </div>
    </div>
  );
}

function UserUpdate() {
  return <h1>修改用户信息</h1>;
}

function UserPay() {
  return <h1>用户充值</h1>;
}

export default function App() {
  return (
    <Router>
      {/* <Route path="/user" component={User}></Route> */}
      <Route path={routerConfig.user.root} component={User} />
    </Router>
  );
}
