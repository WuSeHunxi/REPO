import React, { Component } from "react";
import PropTypes from "prop-types";
import ctx from "./formContext";

//一定处于上下文中
export default class FormInput extends Component {
  static contextType = ctx;

  static defaultProps = {
    type: "text", //属性，由父组件传递来的
  };

  static propTypes = {
    name: PropTypes.string.isRequired, //文本框的名称
    type: PropTypes.string.isRequired, //文本框的类型
  };

  render() {
    return (
      // {受控组件}
      <input
        value={this.context.formData[this.props.name] || ""}
        onChange={(e) => {
          this.context.changeFormData(this.props.name, e.target.value);
        }}
        type={this.props.type}
      />
    );
  }
}
