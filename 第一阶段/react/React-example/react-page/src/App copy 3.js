import React, { useState, useEffect } from "react";

function Test() {
  const [, forceUpdate] = useState({});
  useEffect(() => {
    console.log("副作用函数");

    return () => {
      console.log("清理函数");
    };
  }, []);
  return (
    <h1>
      Test组件
      <button
        onClick={() => {
          forceUpdate({});
        }}
      >
        强制刷新
      </button>
    </h1>
  );
}

export default function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {visible ? <Test /> : ""}
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
