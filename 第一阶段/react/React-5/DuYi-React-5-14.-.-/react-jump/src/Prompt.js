import { Component } from "react";
import { withRouter } from "react-router-dom";

class Prompt extends Component {
  static defaultProps = {
    when: false,
    msg: "",
  };
  handleBlock() {
    if (this.props.when) {
      this.unBlock = this.props.history.block(this.props.msg);
    } else {
      //   this.props.history.push("/page1");
      if (this.unBlock) {
        this.unBlock();
      }
    }
  }
  componentDidMount() {
    this.handleBlock();
  }

  componentDidUpdate(prevProps, prevState) {
    this.handleBlock();
  }

  componentWillUnmount() {
    if (this.unBlock) {
      this.unBlock();
    }
  }
  render() {
    return null;
  }
}

export default withRouter(Prompt);
