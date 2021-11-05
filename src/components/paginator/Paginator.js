import React, { useState, useEffect } from 'react';

import './Paginator.scss';
import chevronLeftIcon from '../../assets/icons/chevron-left.svg';
import chevronRightIcon from '../../assets/icons/chevron-right.svg';

const Paginator = ({ totalItems, pageSize, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage]);

  const maxPages = Math.ceil(totalItems / pageSize);

  const onPreviousClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const onNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="paginator-container">
      <button
        onClick={onPreviousClick}
        disabled={currentPage === 1}
        className="paginator-button"
      >
        <img src={chevronLeftIcon} className="btn-icon" alt="previous" />
      </button>
      <div>{`Page ${currentPage} of ${maxPages}`}</div>
      <button
        onClick={onNextClick}
        disabled={currentPage === maxPages}
        className="paginator-button"
      >
        <img src={chevronRightIcon} className="btn-icon" alt="next" />
      </button>
    </div>
  );
};

export default Paginator;
