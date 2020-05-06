import React, { useState } from "react";
import useTimer from "./components/myHooks/useTimer";

function Test() {
  useTimer(() => {
    console.log("计时器开始");
  }, 1000);
  return <div>计时器</div>;
}

export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible && <Test />}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/隐藏
      </button>
    </div>
  );
}
