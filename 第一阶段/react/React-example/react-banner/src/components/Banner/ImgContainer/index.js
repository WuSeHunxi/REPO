import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImgContainer extends Component {
  static propTypes = {
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    imgWidth: PropTypes.number.isRequired,
    imgHeight: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  };

  render() {
    //根据图片渲染样式
    const imgs = this.props.imgSrcs.map((src, i) => (
      <img
        src={src}
        key={i}
        style={{
          width: this.props.imgWidth,
          height: this.props.imgHeight,
          float: "left",
        }}
        alt=""
      />
    ));
    return (
      <div
        style={{
          height: this.props.imgHeight,
          width: this.props.imgSrcs.length * this.props.imgWidth,
        }}
      >
        {imgs}
      </div>
    );
  }
}
