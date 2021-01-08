import React from "react";
import { PopoverBasicExample } from "./PopoverBasicExample";
import { PopoverPositions } from "./PopoverPositions";
import { PopoverChangingContainer } from "./PopoverChangingContainer";
import { PopoverUpdatingPositionDynamically } from "./PopoverUpdatingPositionDynamically";
export const AllPopover = () => {
  return (
    <div>
      <PopoverBasicExample />
      <PopoverPositions />
      <PopoverChangingContainer />
      <PopoverUpdatingPositionDynamically />
    </div>
  );
};
