import React from "react";
import { ProgressBarBasicExample } from "./ProgressBarBasicExample";
import { ProgressBarContextualAlternative } from "./ProgressBarContextualAlternative";
import { ProgressBarScreenReadOnly } from "./ProgressBarScreenReadOnly";
import { ProgressBarWithLabel } from "./ProgressBarWithLabel";
import { ProgressBarStrippedVariant } from "./ProgressBarStrippedVariant";

export const AllProgressBar = () => {
  return (
    <div>
      <ProgressBarBasicExample />
      <ProgressBarWithLabel />
      <ProgressBarScreenReadOnly />
      <ProgressBarContextualAlternative />
      <ProgressBarStrippedVariant />
    </div>
  );
};
