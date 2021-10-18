import React from "react";

const Item = ({ text }) => {
  return (
    <div className="box">
      <p>This is {text}</p>
    </div>
  );
};

export default Item;
