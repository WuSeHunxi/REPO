import React from "react";

export default function RefSend(Comp) {
  class LogWrapper extends React.Component {
    render() {
      const { forwardRef, ...rest } = this.props;
      return (
        <>
          <Comp ref={forwardRef} {...rest} />
        </>
      );
    }
  }
  const NewLog = React.forwardRef((props, ref) => {
    return <LogWrapper {...props} forwardRef={ref} />;
  });
  return <NewLog />;
}
