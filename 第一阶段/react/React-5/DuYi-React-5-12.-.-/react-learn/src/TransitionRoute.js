import React from "react";
import { Route } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

export default function TransitionRoute(props) {
  const { component: Component, ...rest } = props;
  return (
    // 给路由添加children
    <Route {...rest}>
      {({ match }) => {
        return (
          <CSSTransition
            // in用来控制显示和隐藏
            in={match ? true : false}
            timeout={500}
            classNames={{
              enter: "animated fast fadeInRight",
              exit: "animated fast fadeOutLeft",
            }}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {/* 组件不一样需要自己去渲染 */}
            <Component />
          </CSSTransition>
        );
      }}
    </Route>
  );
}
