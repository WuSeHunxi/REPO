import React, { Component } from "react";
import Student from "./Student";

export default class StudentList extends Component {
  render() {
    //利用单个学生实现全部学生
    //约定：props.stus，传递的是学生的数组
    //获取组件数组
    //组件中的数据形式就是分着来的，因此需要展开运算符
    const students = this.props.stus.map((item) => (
      //一个学生组件对应一个item数据
      <Student key={item.id} {...item} />
    ));
    return <ul>{students}</ul>;
  }
}
