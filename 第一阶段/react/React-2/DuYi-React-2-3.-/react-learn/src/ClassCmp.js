import React, { Component } from "react";

export default class ClassCmp extends Component {
  render() {
    return (
      <div>
        <h1>这是类组件{this.props.number}</h1>
      </div>
    );
  }
}
