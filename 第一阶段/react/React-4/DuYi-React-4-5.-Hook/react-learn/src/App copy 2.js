import React from "react";
import { getAllStudents } from "./services/student";

//HOC 高阶组件--->一层套一层
function withAllStudents(Comp) {
  return class AllStudentsWrapper extends React.Component {
    state = {
      stus: [],
    };

    async componentDidMount() {
      const stus = await getAllStudents();
      this.setState({
        stus,
      });
    }

    render() {
      return <Comp {...this.props} stus={this.state.stus} />;
    }
  };
}

//显示内容即可，但是如何获取数据利用高阶组件
function Test(props) {
  const list = props.stus.map((it) => <li key={it.id}>{it.name}</li>);
  return <ul>{list}</ul>;
}

const TestStudents = withAllStudents(Test);

export default function App() {
  return (
    <div>
      <TestStudents />
    </div>
  );
}
