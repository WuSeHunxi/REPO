import React, { useState } from "react";

export default function App() {
  console.log("App Render");
  const [visible, setVisible] = useState(true);
  const [point, setPoint] = useState({
    x: 0,
    y: 0,
  });
  //强制刷新
  const [, forceFrush] = useState({});
  return (
    <div>
      <h1
        style={{
          display: visible ? "block" : "none",
        }}
      >
        哈哈哈哈哈
      </h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/隐藏
      </button>
      <p>
        x:{point.x},y:{point.y}
      </p>
      <button
        onClick={() => {
          setPoint((prev) => {
            return {
              ...prev,
              x: prev.x + 1,
            };
          });
          setPoint((prev) => {
            return { ...prev, y: prev.y + 1 };
          });
        }}
      >
        x+1
      </button>

      <button
        onClick={() => {
          forceFrush({});
        }}
      >
        强制刷新
      </button>
    </div>
  );
}
