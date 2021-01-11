import React from "react";
import { SpinnerAnimation } from "./SpinnerAnimation";
import { SpinnerBasicExample } from "./SpinnerBasicExample";
import { SpinnerVariants } from "./SpinnerVariants";
export const AllSpinners = () => {
  return (
    <div>
      <SpinnerBasicExample />
      <SpinnerAnimation />
      <SpinnerVariants />
    </div>
  );
};
