import React, { useState, useCallback } from "react";
//利用useCallback解决函数地址的问题

class Test extends React.PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.text}</h1>
        <button onClick={this.props.onClick && this.props.onClick}>
          改变文字
        </button>
      </div>
    );
  }
}

function Parent() {
  const [txt, setTxt] = useState(1);
  const [n, setN] = useState(0);
  const handleClick = useCallback(() => {
    setTxt(txt);
  }, [txt]);
  return (
    <div>
      <Test text={txt} onClick={handleClick} />
      <input
        type="number"
        value={n}
        onChange={(e) => {
          setN(e.target.value);
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}
