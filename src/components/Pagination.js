import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Pagination = ({ handlePageNumber, handlePrev, handleNext }) => {
  const products = useSelector((state) => state.productReducer.products);
  const [currentPageNumber, setCurrentPageNumber] = useState(0);
  const dataPerPage = 16;
  const visitedPages = currentPageNumber * dataPerPage;
  const displayedProducts = () => {
    if (products) {
      products.slice(visitedPages, visitedPages + dataPerPage);
    }
  };
  const pageNumbers = [];
  for (let i = 1; i <= 20; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="prev_btn">
        <button onClick={handlePrev}>Prev</button>
        {displayedProducts}
      </div>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a href="#" onClick={() => handlePageNumber(number)}>
                {number}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="next_btn">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Pagination;
