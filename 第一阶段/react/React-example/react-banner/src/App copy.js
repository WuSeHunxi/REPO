import React from "react";
// import Test from './components/Banner/Test'
// import NewContext from './NewContext'
import useAllStudents from "./components/myHooks/useAllStudents";

function Test() {
  const stus = useAllStudents();
  const list = stus.map((it) => <li key={it.id}>{it.name}</li>);
  return (
    // <Test/>
    // <NewContext/>
    <ul>{list}</ul>
  );
}

export default function App() {
  return (
    <div>
      <Test />
    </div>
  );
}
