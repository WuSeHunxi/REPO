import React, { Component } from "react";
import Student from "./Student";

export default class StudentList extends Component {
  render() {
    var lis = this.props.data.map((item) => {
      return <Student key={item.id} {...item} />;
    });
    return <ul>{lis}</ul>;
  }
}
