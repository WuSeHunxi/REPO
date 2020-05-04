import React, { Component } from "react";

const ctx = React.createContext();

class ChildA extends React.Component {
  static contextType = ctx;
  render() {
    return (
      <h1>
        a:{this.context.a}
        <button
          onClick={() => {
            this.context.changeA(this.context.a + 2);
          }}
        >
          后代组件按钮
        </button>
        <ChildB />
      </h1>
    );
  }
}

function ChildB(props) {
  return (
    <div>
      <p>ChildB</p>
      <ctx.Consumer>{(value) => <h1>{value.a}</h1>}</ctx.Consumer>
    </div>
  );
}

export default class NewContext extends Component {
  state = {
    a: 123,
    b: "pp",
    changeA: (newA) => {
      this.setState({
        a: newA,
      });
    },
  };
  render() {
    return (
      <ctx.Provider value={this.state}>
        <div>
          <ChildA />
          <button
            onClick={() => {
              this.setState({
                a: this.state.a + 1,
              });
            }}
          >
            点击加1
          </button>
        </div>
      </ctx.Provider>
    );
  }
}
