import React from "react";
import { Spinner } from "react-bootstrap";
export const SpinnerBasicExample = () => {
  return (
    <div>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
