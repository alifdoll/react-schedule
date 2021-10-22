import React, { useState } from "react";

const Pages = ({ pageLinks, metaItem, pageHandler }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = metaItem.total;
  const nextPage = (pageLinks?.next || "").split("").pop();
  const prevPage = (pageLinks?.prev || "").split("").pop();

  const range = (start) => {
    let startNum = Number(start);
    let length = 3;
    console.log(start);
    return Array.from({ length }, (_, idx) => idx + startNum);
  };

  const buttonPageHandler = (page) => {
    console.log(`this is page ${totalPage}`);
    pageHandler(page);
    setCurrentPage(page);
  };

  const page = range(currentPage);
  console.log(page);

  const renderedPage = page.map((pageNumber) => (
    <li key={pageNumber}>
      <div
        className={`pagination-link ${
          pageNumber == currentPage ? "is-current" : ""
        }`}
        onClick={() => {
          buttonPageHandler(pageNumber);
        }}
      >
        {pageNumber}
      </div>
    </li>
  ));

  return (
    <>
      <nav
        className="pagination is-centered is-small"
        role="navigation"
        aria-label="pagination"
      >
        <>
          {currentPage > 1 ? (
            <div
              className="pagination-previous"
              onClick={() => {
                buttonPageHandler(prevPage);
              }}
            >
              Previous
            </div>
          ) : (
            <></>
          )}
          {currentPage >= totalPage ? (
            <></>
          ) : (
            <div
              className="pagination-next"
              onClick={() => {
                buttonPageHandler(nextPage);
              }}
            >
              Next page
            </div>
          )}
        </>
        <ul className="pagination-list">{renderedPage}</ul>
      </nav>
    </>
  );
};

export default Pages;
