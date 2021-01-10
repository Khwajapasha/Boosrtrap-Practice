import React from "react";
import { ProgressBar } from "react-bootstrap";
export const ProgressBarStrippedVariant = () => {
  return (
    <div>
      <br />
      <h4>=== ProgressBar Stripped Variant ===</h4>
      <br />
      <ProgressBar striped variant="success" now={40} className="mt-2" />
      <ProgressBar striped variant="info" now={20} className="mt-2" />
      <ProgressBar striped variant="warning" now={60} className="mt-2" />
      <ProgressBar striped variant="danger" now={80} className="mt-2" />
    </div>
  );
};
