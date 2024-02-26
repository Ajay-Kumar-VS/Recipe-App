import React from "react";

import "./Pagination.css";

const Pagination = ({ data }) => {
  
  const { currentPage, setCurrentPage, totalPages } = data;

  //creating a new array of containig page no (ie  1,2,3,4,5,6)
  const paginationArray = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationArray.push(i);

  }
  return (
    <div className="pagination-container">
      <button
        className="pagination-bution"
        style={{ width: "60px", marginRight: "15px" }}
        onClick={() => {
          setCurrentPage((i) => i - 1);
        }}
        disabled={currentPage === 1}>
        Prev..
      </button>
      {paginationArray.map((i) => {
        return (
          <button
            className="pagination-bution"
            style={{ backgroundColor: i === currentPage && "grey" }}
            onClick={() => {
              setCurrentPage(i);
            }}>
            {i}
          </button>
        );
      })}
      <button
        className="pagination-bution"
        style={{ width: "60px", marginLeft: "15px" }}
        onClick={() => {
          setCurrentPage((i) => i + 1);
        }}
        disabled={currentPage === totalPages}>
        Next..
      </button>
    </div>
  );
};

export default Pagination;
