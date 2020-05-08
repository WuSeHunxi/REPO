import React from "react";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import query from "query-string";

function A(props) {
  console.log(props.location);
  console.log(query.parse(props.location.search));
  return (
    <div>
      <h1>A组件</h1>
      <button
        onClick={() => {
          props.history.push("/b");
        }}
      >
        跳转到B组件
      </button>
    </div>
  );
}

function B(props) {
  console.log(props.match);
  return (
    <div>
      <h1>B组件</h1>
      <button
        onClick={() => {
          props.history.push("/a");
          // console.log(props.location);
        }}
      >
        跳转到A组件
      </button>
    </div>
  );
}

function Notfound(props) {
  console.log(props.match);
  return (
    <div>
      <p>无法访问界面</p>
      <WrapperNews />
    </div>
  );
}

const WrapperNews = withRouter(News);

function News(props) {
  return (
    <button
      onClick={() => {
        props.history.push("/a");
      }}
    >
      回到A
    </button>
  );
}

function App() {
  return (
    <Router>
      <Route path="/a" component={A} />
      <Route path="/b/:year(\d+)" component={B} />
      <Route path="/error/:mis?" component={Notfound}></Route>
    </Router>
  );
}

export default App;
