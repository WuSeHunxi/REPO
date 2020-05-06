import React, { useState, useEffect } from "react";

export default function App() {
  const [n, steN] = useState(0);
  //变化不是实时的
  useEffect(() => {
    console.log("副作用函数");
    document.title = `计数器：${n}`;
  });
  return (
    <div>
      <span>{n}</span>
      <button
        onClick={() => {
          steN(n + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
