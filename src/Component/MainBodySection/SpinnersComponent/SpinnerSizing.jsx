import React from "react";
import { Spinner } from "react-bootstrap";
export const SpinnerSizing = () => {
  return (
    <div>
      <br />
      === Different Sizes Of Spinners ===
      <br />
      <Spinner animation="border" size="sm" className="mr-5" />
      <Spinner animation="border" className="mr-5" />
      <Spinner animation="grow" size="sm" className="mr-5" />
      <Spinner animation="grow" />
    </div>
  );
};
