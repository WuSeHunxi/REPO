import React from "react";
import { CSSTransition } from "react-transition-group";
import "./index.css";

FadeTransition.defaultProps = {
  timeout: 500,
};
export default function FadeTransition(props) {
  function addTransition(node) {
    node.style.transition = `opacity ${props.timeout}`;
  }

  function removeTransition(node) {
    node.style.transition = "";
  }
  return (
    <div>
      <CSSTransition
        {...props}
        className="fade"
        onEnter={addTransition}
        onEntered={(node) => {
          removeTransition(node);
          props.onEntered && props.onEntered(node);
        }}
        onExit={addTransition}
        onExited={(node) => {
          removeTransition(node);
          props.onExited && props.onExited(node);
        }}
      />
    </div>
  );
}
