import React from "react";
import ReactDOM from "react-dom";

const arr = [1, 2, undefined, null, false];

var lis = arr.map((item, i) => {
  return <li key={i}>{i}</li>;
});

const a = 12,
  b = 13;
const div = (
  <div>
    {a}*{b}={a * b}
    <p>{arr}</p>
    <ul>{lis}</ul>
  </div>
);

const url =
  "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2962719555,3613138778&fm=27&gp=0.jpg";
const cls = "image";
const div2 = (
  <div>
    <img
      src={url}
      className={cls}
      style={{
        width: "200px",
        marginLeft: "50px",
      }}
      alt=""
    />
  </div>
);

ReactDOM.render(div, document.getElementById("root"));
