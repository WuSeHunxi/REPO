import React, { Component } from "react";
import Form from "./index";

export default class Test extends Component {
  render() {
    return (
      <div>
        {/* {在组件里面添加内容就相当于给组件传递了this.props.children这个属性} */}
        {/* {onSubmit是提交组件的方法} */}
        <Form
          onSubmit={(datas) => {
            console.log(datas);
          }}
        >
          <div>
            账号： <Form.Input name="loginId" />
          </div>
          <div>
            密码： <Form.Input name="loginPwd" type="password" />
          </div>
          <div>
            <Form.Button>提交</Form.Button>
          </div>
        </Form>
      </div>
    );
  }
}
