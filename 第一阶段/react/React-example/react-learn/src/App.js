import React from "react";

function Test() {
  return <ctx.Consumer>{(value) => <h1>{value}</h1>}</ctx.Consumer>;
}

export default function App() {
  return (
    <div>
      <ctx.Provider value="abc">
        <Test />
      </ctx.Provider>
    </div>
  );
}
