import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

const AWrapper = withRouter(A);

// function withRouter(Comp) {
//     return function routerWrapper(props) {
//         //获取上下文中的信息
//         return <Comp {...props} history={上下文中的history} />
//     }
// }

function News(props) {
  return (
    <div>
      <h1>新闻列表</h1>
      <AWrapper />
      {/* <A /> */}
    </div>
  );
}

//A组件是没有放到路由中的组件，因此不能直接获取路由传递的信息，需要使用react-router提供的高阶组件
function A(props) {
  console.log(props);
  return (
    <button
      onClick={() => {
        props.history.push("/");
      }}
    >
      点击返回
    </button>
  );
}

function Index() {
  return <h1>首页</h1>;
}

function NotFound() {
  return <h1>找不到页面</h1>;
}
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/news" component={News} />
        <Route path="/" exact component={Index} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
