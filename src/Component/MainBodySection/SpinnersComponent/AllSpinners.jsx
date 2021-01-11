import React from "react";
import { SpinnerAnimation } from "./SpinnerAnimation";
import { SpinnerBasicExample } from "./SpinnerBasicExample";
export const AllSpinners = () => {
  return (
    <div>
      <br />
      === Basic Example of Spinner ===
      <br />
      <SpinnerBasicExample />
      <SpinnerAnimation />
    </div>
  );
};
