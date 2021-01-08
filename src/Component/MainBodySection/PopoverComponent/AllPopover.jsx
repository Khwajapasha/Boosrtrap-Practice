import React from "react";
import { PopoverBasicExample } from "./PopoverBasicExample";
import { PopoverPositions } from "./PopoverPositions";
import { PopoverChangingContainer } from "./PopoverChangingContainer";
export const AllPopover = () => {
  return (
    <div>
      <PopoverBasicExample />
      <PopoverPositions />
      <PopoverChangingContainer />
    </div>
  );
};
