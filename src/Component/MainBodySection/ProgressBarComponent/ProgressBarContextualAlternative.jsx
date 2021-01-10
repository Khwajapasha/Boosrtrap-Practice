import React from "react";
import { ProgressBar } from "react-bootstrap";
export const ProgressBarContextualAlternative = () => {
  return (
    <div>
      <br />
      <h4> === ProgressBar Contextual Alternative ===</h4>
      <br />
      <ProgressBar variant="success" now={40} className="mt-2" />
      <ProgressBar variant="info" now={20} className="mt-2" />
      <ProgressBar variant="warning" now={60} className="mt-2" />
      <ProgressBar variant="danger" now={80} className="mt-2" />
    </div>
  );
};
