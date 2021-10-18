import React from "react";

const Wrap = ({ children, className = "" }) => {
  return <div className={`column mx-3 my-6 ${className}`}>{children}</div>;
};

export default Wrap;
