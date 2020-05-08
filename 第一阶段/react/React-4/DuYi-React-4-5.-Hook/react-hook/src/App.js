import React from "react";
import { getAllStudents } from "./services/student";

class AllStudents extends React.Component {
  state = {
    stus: [],
  };
  async componentDidMount() {
    const data = await getAllStudents();
    this.setState({
      data,
    });
  }
  render() {
    if (typeof this.props.render === "function") {
      return this.props.render(this.state.stus);
    }
    return <div>AllStudents</div>;
  }
}

function Test() {
  return <div>Test</div>;
}

export default function App() {
  return (
    <div>
      <AllStudents render={(stus) => <Test stus={stus} />} />
    </div>
  );
}
