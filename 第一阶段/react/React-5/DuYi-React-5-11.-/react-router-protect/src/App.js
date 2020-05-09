import React from "react";
import { Route, Link } from "react-router-dom";
import RouterGuard from "./RouterGuard";

function PageA() {
  return <h2>欢迎进入A页面</h2>;
}

function PageB() {
  return <h2>我是B页面</h2>;
}

export default function App() {
  return (
    <RouterGuard
      onBeforeChange={(prev, cur, action, commit, unBlock) => {
        console.log(
          `页面想要从${prev.pathname}跳转到${cur.pathname}，跳转的方式是${action}`
        );
        commit(true);
      }}
      onChange={(prevLocation, location, action, unListen) => {
        console.log(
          `日志：从${prevLocation.pathname}进入页面${location.pathname}，进入方式为${action}`
        );
      }}
    >
      <nav>
        <Link
          to="/page1"
          style={{
            marginRight: 30,
          }}
        >
          pageA页面
        </Link>
        <Link to="/page2">pageB页面</Link>
      </nav>

      <Route path="/page1" component={PageA}></Route>
      <Route path="/page2" component={PageB}></Route>
    </RouterGuard>
  );
}
