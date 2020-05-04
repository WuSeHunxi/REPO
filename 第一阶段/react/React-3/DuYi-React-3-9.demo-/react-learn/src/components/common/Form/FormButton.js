import React from "react";
import { Consumer } from "./formContext";
export default function FormButton(props) {
  //函数组件在获取上下文的时候Consunmer组件的子节点是函数，在函数中进行渲染
  return (
    <Consumer>
      {(ctx) => {
        return (
          <button
            onClick={() => {
              ctx.submit();
            }}
          >
            {props.children}
          </button>
        );
      }}
    </Consumer>
  );
}
