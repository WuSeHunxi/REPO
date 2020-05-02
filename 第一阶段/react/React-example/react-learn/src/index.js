import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";
const appkey = "77521ily__1571400791988";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

async function fetchAllStudents() {
  const stus = await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then((res) => res.json())
    .then((res) => res.data);
  console.log(stus);
  return stus;
}

fetchAllStudents();

async function render() {
  ReactDOM.render("正在加载。。。", document.getElementById("root"));
  const stus = await fetchAllStudents();
  ReactDOM.render(<StudentList stus={stus} />, document.getElementById("root"));
}

render();
