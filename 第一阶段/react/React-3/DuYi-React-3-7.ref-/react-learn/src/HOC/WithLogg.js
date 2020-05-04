import React from "react";

export default function WithLogg(Comp) {
  class LogWrapper extends React.Component {
    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了！${Date.now()}`);
    }
    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了！${Date.now()}`);
    }
    render() {
      const { forwardRef, ...rest } = this.props;
      return (
        <>
          <Comp ref={forwardRef} {...rest} />
        </>
      );
    }
  }
  return React.forwardRef((props, ref) => {
    //原来渲染的组件
    return <LogWrapper {...props} forwardRef={ref} />;
  });
}
