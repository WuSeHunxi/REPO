import React, { Component } from "react";
import FadeTransition from "./components/common/FadeTransition/index";
import { SwitchTransition } from "react-transition-group";

export default class App extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div>
        <SwitchTransition>
          <FadeTransition timeout={2000} key={this.state.show}>
            <h1>{this.state.show ? "隐藏" : "显示"}</h1>
          </FadeTransition>
        </SwitchTransition>
        <button
          onClick={() => {
            this.setState(!this.state.show);
          }}
        >
          切换状态
        </button>
      </div>
    );
  }
}
