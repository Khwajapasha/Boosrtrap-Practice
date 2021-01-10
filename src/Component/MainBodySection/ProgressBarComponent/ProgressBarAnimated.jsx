import React from "react";
import { ProgressBar } from "react-bootstrap";
export const ProgressBarAnimated = () => {
  return (
    <div>
      <br />
      <h4>=== ProgressBar Animated ===</h4>
      <br />
      <ProgressBar animated now={45} className="mt-2" />
    </div>
  );
};
