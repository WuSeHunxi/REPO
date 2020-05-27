import React, { Component } from "react";
import Tick from "./Tick";

export default class TickControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
    };
  }
  render() {
    const msg = "正在进行加载";
    if (this.state.isOver) {
      msg = "倒计时完成";
    }
    return (
      <div>
        <Tick number={10} onOver={()=>{
            this.setState({
                
            })
        }}/>
        <h1>{msg}</h1>
      </div>
    );
  }
}
