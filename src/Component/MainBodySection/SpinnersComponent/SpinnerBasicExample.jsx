import React from "react";
import { Spinner } from "react-bootstrap";
export const SpinnerBasicExample = () => {
  return (
    <div>
      <br />
      === Basic Example of Spinner ===
      <br />
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};
