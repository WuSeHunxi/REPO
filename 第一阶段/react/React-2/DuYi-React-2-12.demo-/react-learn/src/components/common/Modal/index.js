import React from "react";
import "./index.css";

export default function Modal(props) {
  var defaultProps = {
    //默认属性
    bg: "rgba(0,0,0,.5)",
  };
  //数据合并
  var datas = Object.assign({}, defaultProps, props);

  //蒙层只是用来显示，对于隐藏和显示事件来说，Model组件不控制，因为它
  //    是无状态组件，因此需要让有状态的组件进行控制
  return (
    <div
      //抛出事件，让别人来控制显示与隐藏
      onClick={(e) => {
        if (e.target.className === "modal") {
          datas.onClose();
        }
      }}
      className="modal"
      style={{
        background: datas.bg,
      }}
    >
      <div className="modal-center">{datas.children}</div>
    </div>
  );
}
