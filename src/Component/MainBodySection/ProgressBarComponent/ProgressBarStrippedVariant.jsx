import React from "react";
import { ProgressBar } from "react-bootstrap";
export const ProgressBarStrippedVariant = () => {
  return (
    <div>
      <ProgressBar striped variant="success" now={40} />
      <ProgressBar striped variant="info" now={20} />
      <ProgressBar striped variant="warning" now={60} />
      <ProgressBar striped variant="danger" now={80} />
    </div>
  );
};
