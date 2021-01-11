import React from "react";
import { Spinner } from "react-bootstrap";
export const SpinnerAnimation = () => {
  return (
    <div>
      <br />
      === Spinner Animated Border ==
      <br />
      <Spinner animation="border" />
      <br />
      === Spinner Animated Grow ===
      <br />
      <Spinner animation="grow" />
      <br />
    </div>
  );
};
