import React, { useState } from "react";
import Item from "./Item";
import Page from "./Page";

const List = ({
  className,
  listItem,
  pageItem,
  metaItem,
  pageHandler,
  searchCourse,
}) => {
  const [search, setSearch] = useState("");

  const lists = listItem.map((item) => <Item key={item.id} matkul={item} />);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    searchCourse(search);
  };

  return (
    <>
      <div className={className}>
        <input
          className="input my-2"
          type="text"
          placeholder="Search.."
          onChange={handleInputChange}
          value={search}
        />
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
