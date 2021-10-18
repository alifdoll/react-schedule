import React from "react";
import Item from "./Item";

const List = ({ className, list }) => {
  const lists = list.map((item) => <Item key={item.id} text={item.name} />);
  console.log(list);

  return <div className={className}>{lists}</div>;
};

export default List;
