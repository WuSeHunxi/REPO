import React, { useState, useRef, useEffect } from "react";
export default function App() {
  const [n, setN] = useState(10);
  const nRef = useRef(n); // {current:10}
  useEffect(() => {
    const timer = setInterval(() => {
      nRef.current--;
      //此时倒计时的数不是状态，谁也不依赖
      setN(nRef.current);
      if (nRef.current === 0) {
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h1>{n}</h1>
    </div>
  );
}
