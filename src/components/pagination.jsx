import React from "react";

const Pagination = ({ totalPage, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    let active = i === currentPage ? " active" : "";
    let classes = "page-item" + active;
    pageNumbers.push([i, classes]);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number[0]} className={number[1]}>
            <a
              onClick={() => paginate(number[0])}
              href="#"
              className="page-link"
            >
              {number[0]}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
