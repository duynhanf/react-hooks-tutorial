import React, { Component } from "react";

const withHoverOpacity = (WrapperComponent, opacity) => {
  return class extends Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div
          style={{
            opacity: opacity,
          }}
        >
          <WrapperComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withHoverOpacity;
