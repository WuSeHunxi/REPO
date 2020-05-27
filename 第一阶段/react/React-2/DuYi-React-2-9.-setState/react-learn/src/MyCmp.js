import React, { Component } from "react";

export default class MyCmp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 10,
    };
  }

  handleClick = () => {
    this.setState(
      (cur) => {
        return {
          number: cur.number + 1,
        };
      },
      () => {
        console.log("state更新完成，可以获取心得state数据", this.state.number);
      }
    );
    console.log("render");
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}
