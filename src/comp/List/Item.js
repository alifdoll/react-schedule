import React from "react";

const Item = ({ namaMatkul }) => {
  return (
    <div className="box is-clickable belum-dipilih">
      <p>{namaMatkul}</p>
    </div>
  );
};

export default Item;
