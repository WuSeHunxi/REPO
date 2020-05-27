import React from "react";

export default function Student(props) {
  return (
    <li>
      姓名：{props.name}
      年龄：{props.age} 性别：{props.sex} 地址：
      {props.address}
    </li>
  );
}
