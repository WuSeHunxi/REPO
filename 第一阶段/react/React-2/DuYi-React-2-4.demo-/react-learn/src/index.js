import React from "react";
import ReactDOM from "react-dom";
// import Student from "./component/Student";
import StudentList from "./component/StudentList";
// import StudentList from "./component/StudentList";

const appkey = "77521ily__1571400791988";

async function getData() {
  const data = await fetch(
    "http://api.duyiedu.com/api/student/findAll?appkey=" + appkey
  )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      return res.data;
    });
  return data;
}

async function render() {
  const data = await getData(); //得到的是数组
  console.log(data);
  ReactDOM.render(
    <>
      <StudentList data={data} />
    </>,
    document.getElementById("root")
  );
}

render();
