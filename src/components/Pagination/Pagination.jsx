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
      <button
        className={s.btnPagination}
        onClick={prev}
        disabled={currentPage === 1}
      >
        <SlArrowRight className={`${s.arrowLeft} ${s.arrow}`} />
      </button>
      <span className={s.coutenrPages }>
        {currentPage} of {totalPages}
      </span>
      <button
        className={s.btnPagination}
        onClick={next}
        disabled={currentPage === totalPages}
      >
        <SlArrowRight className={`${s.arrowRight} ${s.arrow}`} />
      </button>
    </div>
  );
};

export default Pagination;
