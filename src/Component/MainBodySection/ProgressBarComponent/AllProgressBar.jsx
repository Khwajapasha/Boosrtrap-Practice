import React from "react";
import { ProgressBarBasicExample } from "./ProgressBarBasicExample";
import { ProgressBarWithLabel } from "./ProgressBarWithLabel";

export const AllProgressBar = () => {
  return (
    <div>
      <ProgressBarBasicExample />
      <ProgressBarWithLabel></ProgressBarWithLabel>
    </div>
  );
};
