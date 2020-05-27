import React, { Component } from "react";
import "./Ball.css";
export default class Ball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xSpeed: props.xSpeed || 200,
      ySpeed: props.ySpeed || 200,
      top: props.top || 200,
      left: props.left || 200,
    };
    const duration = 16;
    this.timer = setInterval(() => {
      let xDis = (this.state.xSpeed * duration) / 1000;
      let yDis = (this.state.ySpeed * duration) / 1000;
      let newTop = xDis + this.state.ySpeed;
      let newLeft = yDis + this.state.xSpeed;
      if (newTop < 0) {
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
        newTop = 0;
      } else if (newTop > document.documentElement.clientWidth - 100) {
        newTop = document.documentElement.clientWidth - 100;
        this.setState({
          ySpeed: -this.state.ySpeed,
        });
      }
      if (newLeft < 0) {
        newLeft = 0;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      } else if (newLeft > document.documentElement.clientHeight - 100) {
        newLeft = document.documentElement.clientHeight - 100;
        this.setState({
          xSpeed: -this.state.xSpeed,
        });
      }
      this.setState({
        left: newLeft,
        top: newTop,
      });
    }, duration);
  }
  render() {
    return (
      <div
        className="ball"
        style={{
          left: this.state.left,
          top: this.state.top,
          background: this.props.bg || "#f40",
        }}
      ></div>
    );
  }
}
