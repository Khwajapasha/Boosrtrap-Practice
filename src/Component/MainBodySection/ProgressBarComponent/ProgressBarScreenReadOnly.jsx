import React from "react";
import { ProgressBar } from "react-bootstrap";
export const ProgressBarScreenReadOnly = () => {
  const now = 60;

  const progressInstance = <ProgressBar now={now} label={`${now}%`} srOnly />;
  return (
    <div className="mt-4">
      <h4>=== Add a srOnly prop to hide the label visually === </h4>
      {progressInstance}
    </div>
  );
};
