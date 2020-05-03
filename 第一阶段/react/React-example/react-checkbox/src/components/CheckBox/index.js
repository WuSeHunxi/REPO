import React, { Component } from "react";

export default class CheckBoxGroup extends Component {
  handleChange = (e) => {
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, e.target.value];
    } else {
      newArr = this.props.chooseDatas.filter((it) => it != e.target.value);
    }
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  };
  getCheckBoxes() {
    return this.props.data.map((it) => {
      <label key={it.value}>
        <input
          type="checkbox"
          name={this.props.name}
          value={it.value}
          checked={this.props.chooseDatas.includes(it.value)}
          onChange={this.handleChange}
        />
        {it.text}
      </label>;
    });
  }
  render() {
    const bs = this.getCheckBoxes();
    return <div>{bs}</div>;
  }
}
