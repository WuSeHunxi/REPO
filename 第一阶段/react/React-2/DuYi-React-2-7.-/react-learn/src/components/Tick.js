import React, { Component } from "react";

export default class Tick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
    };
    this.timer = setInterval(() => {
      this.setState({
        number: this.props.number - 1,
      });
    }, 1000);
    if (this.state.number === 0) {
      clearInterval(this.timer);
      //定时器完成之后需要进行一些其他的操作
      
    }
  }
  render() {
    return <h1>倒计时：{this.state.number}</h1>;
  }
}
