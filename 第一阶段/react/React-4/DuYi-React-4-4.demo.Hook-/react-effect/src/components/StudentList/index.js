import React from "react";

export default function StudentList({stus}) {
  // console.log(props)
  const lists = stus.map((it) => <li key={it.id}>{it.name}</li>);
return <ul>{lists}</ul>;
}
