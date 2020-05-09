import React, { Component } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

let prevLocation, location, action, unBlock;
class _GuardHelper extends Component {
  componentDidMount() {
    unBlock = this.props.history.block((newLocation, ac) => {
      prevLocation = this.props.location;
      location = newLocation;
      action = ac;
      return "";
    });
    this.unListen = this.props.history.listen((location, action) => {
      if (this.props.onChange) {
        const prevLocation = this.props.location;
        this.props.onChange(prevLocation, location, action, this.unListen);
      }
    });
  }
  render() {
    return "";
  }
}
const GuardHelper = withRouter(_GuardHelper);
export default class RouterGuard extends React.Component {
  //   componentDidMount() {
  //     this.props.history.listen((location, action) => {
  //       //   console.log("监听跳转");
  //       //   console.log(location, action);
  //       //   console.log(this.props.location);
  //       console.log(
  //         `从${this.props.location.pathname}跳转到${location.pathname},跳转得方式是${action}`
  //       );
  //     });

  //     this.props.history.block("真的要跳转页面吗");
  //   }

  handleConfirm = (msg, commit) => {
    if (this.props.onBeforeChange) {
      this.props.onBeforeChange(
        prevLocation,
        location,
        action,
        commit,
        unBlock
      );
    } else {
      commit(true);
    }
  };

  render() {
    //   getUserConfirmation={this.handleConfirm}
    return (
      <Router>
        <GuardHelper onChange={this.props.onChange} />
        {this.props.children}
      </Router>
    );
  }
}
