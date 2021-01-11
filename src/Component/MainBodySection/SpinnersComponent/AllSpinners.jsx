import React from "react";
import { SnippersInButtons } from "./SnippersInButtons";
import { SpinnerAnimation } from "./SpinnerAnimation";
import { SpinnerBasicExample } from "./SpinnerBasicExample";
import { SpinnerSizing } from "./SpinnerSizing";
import { SpinnerVariants } from "./SpinnerVariants";
export const AllSpinners = () => {
  return (
    <div>
      <SpinnerBasicExample />
      <SpinnerAnimation />
      <SpinnerVariants />
      <SpinnerSizing />
      <SnippersInButtons />
    </div>
  );
};
