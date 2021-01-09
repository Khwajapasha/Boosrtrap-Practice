import React from "react";
import { ProgressBar } from "react-bootstrap";
export const ProgressBarWithLabel = () => {
  const now = 60;

  const progressInstance = <ProgressBar now={now} label={`${now}%`} />;
  return (
    <div className="mt-4">
      <h4>=== ProgressBar With Label ===</h4>
      {progressInstance}
    </div>
  );
};
