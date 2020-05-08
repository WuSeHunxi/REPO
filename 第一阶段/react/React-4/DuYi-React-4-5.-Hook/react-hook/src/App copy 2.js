import React from "react";
import { getAllStudents } from "./services/student";

function WithUseAll(Comp) {
  return class WrapperTest extends React.Component {
    state = {
      stus: [],
    };

    async componentDidMount() {
      const stus = await getAllStudents();
      console.log(stus);
      this.setState({
        stus,
      });
    }
    render() {
      return <Comp {...this.props} stus={this.state.stus} />;
    }
  };
}

const NewTest = WithUseAll(Test);

function Test(props) {
  const list = props.stus.map((it) => <li key={it.id}>{it.name}</li>);
  return <ul>{list}</ul>;
}

export default function App() {
  return (
    <div>
      <NewTest />
    </div>
  );
}
