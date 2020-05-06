import React, { useContext } from "react";
const ctx = React.createContext();

function Test() {
  const value=useContext(ctx);
return <h1>{value}</h1>
  //   return <ctx.Consumer>{(value) => <h1>{value}</h1>}</ctx.Consumer>;
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
