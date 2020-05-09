import React from "react";
import { Route, Redirect } from "react-router-dom";
import loginInfo from "./loginInfo";

export default function ProtectedRoute({
  component: Component,
  children,
  render,
  ...rest
}) {
  //如果将component页传递过来的话就会直接跳转了，因此需要对属性进行处理
  return (
    <Route
      {...rest}
      render={(values) => {
        if (loginInfo.isLogin) {
          //可以正常展示页面
          return <Component />;
        } else {
          // return <Redirect to={{
          //     pathname: "/login",
          //       returnurl-->返会的url
          //     search: "?returnurl=" + values.location.pathname
          // }} />

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
    />
  );
}
