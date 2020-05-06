import React, { useState, useEffect } from "react";
//以下是错误的做法
export default function App() {
  const [n, setN] = useState(10);
  useEffect(() => {
    //仅挂载后运行
    const timer = setInterval(() => {
      //渲染完以后开始执行，应该是你想要做什么而不是每一次都改变n的值
      const newN = n - 1;
      console.log(newN);
      setN(newN);
      if (newN === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      //函数卸载时运行
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>{n}</h1>
      <button
        onClick={() => {
          setN(n + 1);
        }}
      >
        n+1
      </button>
    </div>
  );
}
