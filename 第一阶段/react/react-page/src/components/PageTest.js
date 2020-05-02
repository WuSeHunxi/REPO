import React, { Component } from "react";
import Page from "./Page";

export default class PageTest extends Component {
  state = {
    current: 1,
    total: 0,
    limit: 10,
    panelNumber: 5,
  };
//   constructor(props) {
//     super(props);
//   }

  handlePageChange = (newPage) => {
    this.setState({
      current: newPage,
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <Page {...this.state} onPageChange={this.handlePageChange} />
        </div>
      </div>
    );
  }
}
