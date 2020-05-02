import React, { Component } from "react";
import ModalComp from "./common/ModalComp";

export default class ModalTest extends Component {
  state = {
    isShow: false,
  };

  handleShow = () => {
    this.setState({
      isShow: true,
    });
  };
  handleHide = () => {
    this.setState({
      isShow: false,
    });
  };
  render() {
    return (
      <div>
        {this.state.isShow ? (
          <ModalComp onClick={this.handleHide}>
            <div
              style={{
                background: "#fff",
              }}
            >
              <div>蒙层</div>
              <button onClick={this.handleHide}>关闭蒙层</button>
            </div>
          </ModalComp>
        ) : null}
        <button onClick={this.handleShow}>显示蒙层</button>
      </div>
    );
  }
}
