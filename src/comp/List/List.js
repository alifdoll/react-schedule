import React from "react";
import Item from "./Item";
import Page from "./Page";

const List = ({ className, listItem, pageItem, metaItem, pageHandler }) => {
  const lists = listItem.map((item) => (
    <Item key={item.id} namaMatkul={item.nama} />
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
