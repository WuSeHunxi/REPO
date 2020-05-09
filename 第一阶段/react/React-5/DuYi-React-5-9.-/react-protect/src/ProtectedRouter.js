import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginInfo from "./loginInfo";

export default function ProtectedRouter({
  component: Component,
  // path,
  render,
  children,
  ...rest
}) {
  //组件一开始不能传递过来，需要render之后在进行渲染
  return (
    <Route
      {...rest}
      render={(values) => {
        if (loginInfo.isLogin) {
          return <Component />;
        } else {
          return (
            <Redirect
            to={{
              pathname: "/login",
              state: values.location.pathname,
            }}
            />
          );
        }
      }}
    ></Route>
  );
}
