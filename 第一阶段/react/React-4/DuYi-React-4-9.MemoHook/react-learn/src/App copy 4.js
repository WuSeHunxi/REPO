import React, { useState, useMemo } from "react";

function Item(props) {
  return <li>{props.value}</li>;
}

export default function App() {
  const [range] = useState({ mn: 1, max: 10000 });
  const list = useMemo(() => {
    const list = [];
    for (let i = range.min; i < range.max; i++) {
      list.push(<Item key={i} value={i}></Item>);
    }
  }, [range.min, range.max]);
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}
