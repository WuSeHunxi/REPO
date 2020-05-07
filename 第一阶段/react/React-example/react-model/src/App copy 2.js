import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <CSSTransition appear className="text" timeout={2000} in={visible}>
        <h1>标题</h1>
      </CSSTransition>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换状态
      </button>
    </div>
  );
}
