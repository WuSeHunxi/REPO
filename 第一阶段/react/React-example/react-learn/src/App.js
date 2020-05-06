import React, { useRef } from "react";

window.arr = [];

export default function App() {
  const inpRef = useRef(33);
  window.arr.push(inpRef);
  console.log(inpRef);
  return (
    <div>
      <input ref={inpRef} type="text" />
      <button
        onClick={() => {
          console.log(inpRef.current.value);
        }}
      >
        得到Input的值
      </button>
    </div>
  );
}
