import React, { Component } from "react";

const ctx = React.createContext();

class ChildA extends React.Component {
  static contextType = ctx;
  render() {
    return (
      <div>
        <h2>ChildA</h2>
        <p>姓名：{this.context.name}</p>
        <p>年龄：{this.context.age}</p>
      </div>
    );
  }
}

function ChildB(props) {
  return (
    <div>
      <h1>ChildB</h1>
      <ctx.Consumer>{(value) => <p>姓名：{value.name}</p>}</ctx.Consumer>
    </div>
  );
}

export default class NewContext extends Component {
  state = {
    name: "haha",
    age: 16,
    sex: "male",
  };
  render() {
    return (
      <ctx.Provider value={this.state}>
        <div>
          <ChildA />
          <ChildB />
        </div>
      </ctx.Provider>
    );
  }
}
