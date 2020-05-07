import React, { Component } from "react";
import Modal from "./common/Modal";

export default class Test extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    return (
      <div>
        <img
          src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3159856553,1527464792&fm=27&gp=0.jpg"
          alt=""
        />
        {/* {组件里面的内容} */}
        {this.state.showModal ? (
          // {组件据有关闭功能}
          <Modal onClose={this.hideModal}>
            <div
              style={{
                background: "#fff",
              }}
            >
              {/* {向组件传递的元素内容} */}
              <h1>asdfasfasfasfasdfasdf</h1>
              <button onClick={this.hideModal}>关闭朦层</button>
            </div>
          </Modal>
        ) : null}
        <button onClick={this.showModal}>显示朦层</button>
      </div>
    );
  }
}
