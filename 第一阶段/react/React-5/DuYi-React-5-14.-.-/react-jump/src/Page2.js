import React, { Component } from "react";
import Prompt from "./Prompt";

export default class Page2 extends Component {
  state = {
    val: "",
  };

  render() {
    return (
      <div>
        <h1>Two Page</h1>
        <Prompt when={this.state.val!==''} msg="真的要删除数据吗？一定要想清楚啊" />
        <textarea
          value={this.state.val}
          onChange={(e) => {
            this.setState({
              val: e.target.value,
            });
          }}
        ></textarea>
      </div>
    );
  }
}
