import React from "react";
import { Pagination } from "react-bootstrap";

const pages = [1, 2, 3, 4, 5, 6];

const CustomPagination = ({ page, updatePageNum }) => (
  <Pagination>
    {page > 1 && (
      <Pagination.Prev
        onClick={() => {
          updatePageNum(page - 1);
        }}
      />
    )}

    {pages.map((pageNum) => (
      <Pagination.Item
        key={pageNum}
        active={pageNum === page}
        onClick={() => {
          updatePageNum(pageNum);
        }}
      >
        {pageNum}
      </Pagination.Item>
    ))}
    {page < pages[pages.length - 1] && (
      <Pagination.Next
        onClick={() => {
          updatePageNum(page + 1);
        }}
      />
    )}
  </Pagination>
);

export default CustomPagination;
