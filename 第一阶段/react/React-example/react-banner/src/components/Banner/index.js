import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";
import ImgContainer from "./ImgContainer/index";
import SwitchArrow from "./SwitchArrow/index";
import SwitchDot from "./SwitchDot/index";

export default class Banner extends Component {
  static defaultProps = {
    width: 520,
    height: 280,
    imgSrcs: [],
    autoDuration: 3000,
    duration: 500,
  };

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
    autoDuration: PropTypes.number.isRequired,
    duration: PropTypes.number.isRequired,
  };
  state = {
    curIndex: 0, //当前显示的是哪张图片
  };
  timer = null;

  imgContainerRef = (el) => {
    this.imgContainer = el;
  };

  autoSwitch() {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      var cur = this.state.curIndex;
      cur = (cur + 1) % this.props.imgSrcs.length;
      this.handleSwitch(cur);
    }, this.props.autoDuration);
  }

  componentDidMount() {
    this.autoSwitch();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleArrowChange = (type) => {
    var cur = this.state.curIndex;
    if (type === "left") {
      cur--;
      if (cur < 0) {
        cur = this.props.imgSrcs.length - 1;
      }
    } else {
      cur++;
      if (cur > this.props.imgSrcs.length - 1) {
        cur = 0;
      }
    }
    this.handleSwitch(cur);
  };

  handleSwitch = (index) => {
    this.setState({
      curIndex: index,
    });
    this.imgContainer.switchTo(index);
  };
  render() {
    return (
      <div
        className="banner-container"
        style={{
          width: this.props.width,
          height: this.props.height,
        }}
      >
        <ImgContainer
          ref={this.imgContainerRef}
          imgSrcs={this.props.imgSrcs}
          imgWidth={this.props.width}
          imgHeight={this.props.height}
          duration={this.props.duration}
        />
        <SwitchArrow onChange={this.handleArrowChange} />
        <SwitchDot
          total={this.props.imgSrcs.length}
          curIndex={this.state.curIndex}
          onChange={this.handleSwitch}
        />
      </div>
    );
  }
}
