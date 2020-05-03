import React, { Component } from "react";
import types from "../../utils/commonTypes";
import PropTypes from "prop-types";
import WithDataGroup from "../../HOC/withDataGroup";


class CheckBox extends Component {
  //对组件使用静态属性propTypes
  static propTypes = {
    name: PropTypes.string.isRequired,
    chooseDatas: types.chooseDatas,
    onChange: PropTypes.func,
    info: types.singleData.isRequired,
  };

  handleChange = (e) => {
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, e.target.value];
    } else {
      newArr = this.props.chooseDatas.filter((it) => it !== e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  };

  render() {
    return (
      <label>
        <input
          type="checkbox"
          name={this.props.name}
          value={this.props.info.value}
          checked={this.props.chooseDatas.includes(this.props.info.value)}
          onChange={this.handleChange}
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default WithDataGroup(CheckBox);
