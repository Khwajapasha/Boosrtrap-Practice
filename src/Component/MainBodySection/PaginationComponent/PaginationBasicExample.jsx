import React from "react";
import { Pagination } from "react-bootstrap";
export const PaginationBasicExample = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div>
      <br />
      <h4>=== Basic Example Of Pagination ===</h4>
      <br />
      <br />

      <Pagination size="lg">{items}</Pagination>
      <br />
      <Pagination>{items}</Pagination>
      <br />
      <Pagination size="sm">{items}</Pagination>
    </div>
  );
};
