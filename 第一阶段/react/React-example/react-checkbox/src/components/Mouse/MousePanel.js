import React, { PureComponent } from "react";
import "./style.css";

export default class MousePanel extends PureComponent {
  state = {
    x: 0,
    y: 0,
  };

  divRef = React.createRef();

  handleMouseMove = (e) => {
    const { left, top } = this.divRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    this.setState({
      x,
      y,
    });
  };

  render() {
    return (
      <div
        className="point"
        ref={this.divRef}
        onMouseMove={this.handleMouseMove}
      >
        <div
          style={{
            width: 100,
            height: 100,
            background: "#008c8c",
            position: "absolute",
            left: this.state.x-50,
            top: this.state.y-50,
          }}
        ></div>
      </div>
    );
  }
}
