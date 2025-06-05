import React from "react";
import { SlArrowRight } from "react-icons/sl";
import s from "./Pagination.module.css";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => {
  const prev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const next = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className={s.pagination}>
      <button onClick={prev} disabled={currentPage === 1}>
        <SlArrowRight className={`${s.arrowLeft} ${s.arrow}`} />
        <span>Previous</span>
      </button>
      <span>
        Side {currentPage} af {totalPages}
      </span>
      <button onClick={next} disabled={currentPage === totalPages}>
        <span>Next</span>
        <SlArrowRight className={`${s.arrowRight} ${s.arrow}`} />
      </button>
    </div>
  );
};

export default Pagination;
