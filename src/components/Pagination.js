import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
 

  return (
  <ReactPaginate
  previousLabel={"prev"}
  nextLabel={"next"}
  breakLabel={"..."}
  breakClassName={"break-me"}
  pageCount={props.pageCount}
  marginPagesDisplayed={2}
  pageRangeDisplayed={10}
  onPageChange={props.onPageChange}
  containerClassName={"pagination"}
  subContainerClassName={"pages pagination"}
  activeClassName={"active"}
  />
  );
};

export default Pagination;
