import React, { useState } from "react";
import "animate.css";
import FadeTransition from "./components/common/FadeTransition/index";

export default function App() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <FadeTransition timeout={1000} in={visible}>
        <h1>标题</h1>
      </FadeTransition>
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
