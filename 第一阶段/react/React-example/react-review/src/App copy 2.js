import React, { useState } from "react";

window.arr = [];
export default function App() {
  const [n, setN] = useState(0);
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState({
    x: 1,
    y: 2,
  });
  window.arr.push(setN);
//   console.log(window.arr);
  console.log("App render");
  return (
    <div>
      <p
        style={{
          display: visible ? "block" : "none",
        }}
      >
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </p>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        显示/隐藏
      </button>
      <p>
        x:{data.x},y:{data.y}
      </p>
      <button
        onClick={() => {
          setData({
            ...data,
            x: data.x + 1,
          });
        }}
      >
        x+1
      </button>
    </div>
  );
}
