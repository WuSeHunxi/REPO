import React, { Component } from "react";
// import { A, B } from "./components/Comp";
// import withLog from "./HOC/WithLog";
import Test from "./components/CheckBox/Test";

// let AComp = withLog(A);
// let BComp = withLog(B);

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <AComp/>
      <BComp/> */}
        <Test />
      </div>
    );
  }
}
