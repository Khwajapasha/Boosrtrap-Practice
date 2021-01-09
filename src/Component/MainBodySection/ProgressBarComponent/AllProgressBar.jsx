import React from "react";
import { ProgressBarBasicExample } from "./ProgressBarBasicExample";
import { ProgressBarScreenReadOnly } from "./ProgressBarScreenReadOnly";
import { ProgressBarWithLabel } from "./ProgressBarWithLabel";

export const AllProgressBar = () => {
  return (
    <div>
      <ProgressBarBasicExample />
      <ProgressBarWithLabel />
      <ProgressBarScreenReadOnly />
    </div>
  );
};
