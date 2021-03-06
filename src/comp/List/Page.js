import React, { useState } from "react";

const Pages = ({ pageLinks, metaItem, pageHandler }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPage = metaItem.total;

  const buttonPageHandler = (page) => {
    console.log(`this is page ${currentPage}`);
    pageHandler(page);
    setCurrentPage(page);
  };

  return (
    <>
      <nav
        className="pagination is-centered is-large"
        role="navigation"
        aria-label="pagination"
      >
        <>
          {currentPage > 1 ? (
            <div
              className="pagination-previous"
              onClick={() => {
                buttonPageHandler(currentPage - 1);
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
                buttonPageHandler(currentPage + 1);
              }}
            >
              Next page
            </div>
          )}
        </>
      </nav>
    </>
  );
};

export default Pages;
