import React, { useEffect, useState } from "react";

const ref = React.createRef();

function stop() {
  clearInterval(window.timer);
  window.timer = null;
}

function Movableblock(props) {
  useEffect(() => {
    const div = ref.current;
    const disX = 5;
    const disY = 5;
    let newX = 0;
    let newY = 0;
    window.timer = setInterval(() => {
      newX += disX;
      newY += disY;
      console.log(newX);
      div.style.left = newX + "px";
      div.style.top = newY + "px";
      if (newX >= props.left || newY >= props.top) {
        stop();
      }
    }, 16);
  });
  return (
    <div
      ref={ref}
      style={{
        width: 100,
        height: 100,
        background: "#f40",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    ></div>
  );
}

export default function App() {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  return (
    <div
      style={{
        paddingTop: 200,
      }}
    >
      <div>
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
      </div>
      <Movableblock left={point.x} top={point.y} />
    </div>
  );
}
