import React, { useState, useRef, useImperativeHandle } from "react";

function Test(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      method() {
        console.log("Test cmp");
      },
    };
  },[]);
  return <h1>Test Cmp</h1>;
}

const TestWrapper = React.forwardRef(Test);

export default function App() {
  const testRef = useRef();
  return (
    <div>
      <TestWrapper ref={testRef} />
      <button onClick={() => {}}>点击调用Test组件的method方法</button>
    </div>
  );
}
