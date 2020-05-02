import React from "react";
import "./index.css";

export default function TwoLayout(props) {
  const defaultProps = {
    minLeftWidth: 500,
    minRightWidth: 500,
    gap: 0,
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div className="container">
      <div
        className="left-box"
        style={{
          marginRight: datas.gap,
          //   width: datas.minLeftWidth,
        }}
      >
        {props.left}
      </div>
      <div
        className="right-box"
        style={
          {
            //   width: datas.minRightWidth,
          }
        }
      >
        {props.right}
      </div>
    </div>
  );
}
