import React from "react";

const Wrap = ({ children, className = "" }) => {
  return <div className={`column mx-2 ${className}`}>{children}</div>;
};

export default Wrap;
