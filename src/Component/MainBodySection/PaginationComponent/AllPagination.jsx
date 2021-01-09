import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { PaginationBasicExample } from "./PaginationBasicExample";
import { PaginationMoreOption } from "./PaginationMoreOption";

export const AllPagination = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <PaginationBasicExample />
          <PaginationMoreOption />
        </div>
      )}
      <div>
        <Button onClick={() => setShow(!show)}>Load All Pagination</Button>
      </div>
    </React.Fragment>
  );
};
