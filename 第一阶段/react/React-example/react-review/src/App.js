import React, { useState } from "react";

export default function App() {
  console.log("App render");
  const [n, setN] = useState(0);
  // const [,forceUpdate]=useState({});
  return (
    // <div>
    //     <button onClick={()=>{
    //         forceUpdate({})
    //     }}>强制刷新</button>
    // </div>
    <div>
      <p>{n}</p>
      <button
        onClick={() => {
          setN((prev) => prev + 1);
          setN((prev) => prev + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}
