import React from "react";
import { GridBasicExample } from "./GridBasicExample";
import { GridSpacing } from "./GridSpacing";
import { GridSpecificBreakPoint } from "./GridSpecificBreakPoint";
export const AllGrid = () => {
  return (
    <div>
      <GridSpacing />
      <GridBasicExample />
      <GridSpecificBreakPoint />
    </div>
  );
};

export default AllGrid;
