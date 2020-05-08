import React from "react";
import useAllStudent from "./Hook/useAllStudent";
function Test() {
  const data = useAllStudent();
  console.log(data);
}

function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

export default App;
