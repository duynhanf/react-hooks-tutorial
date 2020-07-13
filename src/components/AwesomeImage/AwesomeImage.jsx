import React from "react";

const AwesomeImage = ({ src }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "200px",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
    ></div>
  );
};

export default AwesomeImage;
