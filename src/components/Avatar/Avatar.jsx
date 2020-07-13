import React from "react";

const Avatar = ({ src }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "50%",
      }}
    ></div>
  );
};

export default Avatar;
