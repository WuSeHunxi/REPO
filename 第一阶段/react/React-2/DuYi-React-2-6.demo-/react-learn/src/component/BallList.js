import React, { Component } from "react";
import Ball from "./Ball";
import { getRandom } from "../util";

export default class BallList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ballInfos: [],
    };
    this.timer = setInterval(() => {
      let info = {
        left: getRandom(0, document.documentElement.clientWidth - 100) || 200,
        top: getRandom(0, document.documentElement.clientHeight - 100) || 200,
        xSpeed: getRandom(100, 200) || 100,
        ySpeed: getRandom(100, 200) || 100,
        bg: `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(
          0,
          255
        )})`,
      };
      this.setState({
        ballInfos: [...this.state.ballInfos, info],
      });
      if (this.state.ballInfos.length === 10) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
  render() {
    const ballList = this.state.ballInfos.map((item, i) => {
      return <Ball {...item} key={i} />;
    });
    return <>{ballList}</>;
  }
}
