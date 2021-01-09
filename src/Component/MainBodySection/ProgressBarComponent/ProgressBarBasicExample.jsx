import React from "react";
import { ProgressBar } from "react-bootstrap";
export const ProgressBarBasicExample = () => {
  return (
    <div className="mt-4">
      <h4>=== Basic Example Of Progress Bar ===</h4>
      <ProgressBar now={60} />
    </div>
  );
};
