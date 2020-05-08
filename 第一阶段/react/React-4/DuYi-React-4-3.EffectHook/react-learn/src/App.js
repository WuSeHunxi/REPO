import React, { useState, useEffect } from "react";

const divRef = React.createRef();
window.timer = null;

function MovableBox(props) {
  useEffect(() => {
    const disX = 5;
    const disY = 5;
    let newX = 0;
    let newY = 0;
    const div = divRef.current;
    window.timer = setInterval(() => {
      newX += disX;
      newY += disY;
      div.style.left = newX + "px";
      div.style.top = newY + "px";
      if (newX >= props.left && newY >= props.top) {
        // console.log(div.offsetTop);
        stop();
      }
    }, 16);
    return stop;
  });
  return (
    <div
      ref={divRef}
      style={{
        width: 100,
        height: 100,
        background: "#f00",
        position: "absolute",
        left: 0,
        top: 0,
      }}
    ></div>
  );
}

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}

function Clean() {
  const [, forceFrush] = useState({});
  useEffect(() => {
    console.log("仅在挂载时执行");
    return () => {
      console.log("尽在卸载时执行");
    };
  }, []);
  return (
    <button
      onClick={() => {
        forceFrush({})
      }}
    >
      强制清除
    </button>
  );
}

export default function App() {
  const [point, setPoint] = useState({
    x: 0,
    y: 0,
  });
  const [visible, setVisible] = useState(true);
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      <MovableBox left={point.x} top={point.y}></MovableBox>
      x:{" "}
      <input
        type="number"
        value={point.x || ""}
        onChange={(e) => {
          setPoint({
            ...point,
            x: parseInt(e.target.value),
          });
        }}
      />
      y:{" "}
      <input
        type="number"
        value={point.y || ""}
        onChange={(e) => {
          setPoint({
            ...point,
            y: parseInt(e.target.value),
          });
        }}
      />
      <Clean
        style={{
          display: visible ? "block" : "none",
        }}
      ></Clean>
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
