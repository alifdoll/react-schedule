import React from "react";
import Item from "./Item";
import Page from "./Page";

const List = ({
  className,
  listItem,
  pageItem,
  metaItem,
  pageHandler,
  classHandler,
}) => {
  const lists = listItem.map((item) => (
    <Item key={item.id} matkul={item} classHandler={classHandler} />
  ));

  return (
    <>
      <div className={className}>
        <input className="input my-2" type="text" placeholder="Search.." />
        <>{lists}</>
        <Page
          pageLinks={pageItem}
          pageHandler={pageHandler}
          metaItem={metaItem}
        />
      </div>
    </>
  );
};

export default List;
