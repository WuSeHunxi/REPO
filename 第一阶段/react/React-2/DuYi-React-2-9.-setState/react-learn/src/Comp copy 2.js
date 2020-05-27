import React, { Component } from "react";

export default class Comp extends Component {
  state = {
    n: 0,
  };
  handleClick = () => {
    //放入事件内，则是异步的，因此需要使用函数的方式得到最新状态
    //如果要使用改变后的状态，需要在setState中使用第二个参数---此时的回调函数
    this.setState(
      {
        n: this.state.n + 1,
      },
      () => {
        //状态完成改变之后触发，该回调运行在render之后
        console.log(this.state.n);
      }
    );
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.n}</h1>
        <p>
          <button onClick={this.handleClick}>+</button>
        </p>
      </div>
    );
  }
}
