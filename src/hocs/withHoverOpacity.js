import React, { Component } from "react";

const withHoverOpacity = (WrapperComponent, opacity) => {
  return class extends Component {
    render() {
      return (
        <div
          style={{
            opacity: opacity
          }}
        >
          <WrapperComponent {...this.props} />
        </div>
      );
    }
  };
};

export default withHoverOpacity;
