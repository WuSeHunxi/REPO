import React, { Component } from "react";
import Tick from "./Tick copy";

export default class TickControl extends Component {
  state = {
    isOver: false,
  };
  render() {
    let status = "正在倒计时";
    if (this.state.isOver) {
      status = "倒计时完成";
    }
    return (
      <div>
        <Tick
          onOver={() => {
            this.setState({
              isOver: true,
            });
          }}
          number={10}
        />
        <h2>{status}</h2>
      </div>
    );
  }
}
