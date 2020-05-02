import React from "react";
import "./index.css";

export default function Modal(props) {
  var defaultProps = {
    bg: "rgba(0,0,0,0.5)",
  };
  const datas = Object.assign({}, defaultProps, props);
  return (
    <div
      onClick={this.datas.handleHide}
      className="modal"
      style={{
        background: datas.bg,
      }}
    >
      <div className="modal-center">{datas.children}</div>
    </div>
  );
}
