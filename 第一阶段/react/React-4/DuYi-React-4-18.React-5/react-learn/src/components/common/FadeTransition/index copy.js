import React from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";

FadeTransition.defaultProps = {
  timeout: 500,
};

export default function FadeTransition(props) {
  function addTransition(node) {
    node.style.transition = `opacity ${props.timeout}ms`;
  }

  function removeTransition(node) {
    node.style.transition = "";
  }

  return (
    <CSSTransition
      {...props}
      classNames="fade"
      //进入后立即触发
      onEnter={addTransition}
      //删除相应的类就会立即触发
      onEntered={(node, isAppear) => {
        removeTransition(node);
        props.onEntered && props.onEntered(node, isAppear);
      }}
      onExit={addTransition}
      onExited={(node) => {
        removeTransition(node);
        props.onExited && props.onExited(node);
      }}
    />
  );
}
