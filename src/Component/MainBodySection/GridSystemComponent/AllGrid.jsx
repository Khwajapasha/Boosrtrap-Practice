import React from "react";
import { GridBasicExample } from "./GridBasicExample";
import { GridAutoColumnWidth } from "./GridAutoColumnWidth";
import { GridSettingOneColumnWidth } from "./GridSettingOneColumnWidth";
import { GridVariableWidthContent } from "./GridVariableWidthContent";
import { GridResponsive } from "./GridResponsive";
import { GridVisualOrder } from "./GridVisualOrder";
import { GridSettingColumnWidthInRow } from "./GridSettingColumnWidthInRow";

export const AllGrid = () => {
  return (
    <React.Fragment>
      <div>
        <GridBasicExample />
        <GridAutoColumnWidth />
        <GridSettingOneColumnWidth />
        <GridVariableWidthContent />
        <GridResponsive />
        <GridVisualOrder />
        <GridSettingColumnWidthInRow />
      </div>
    </React.Fragment>
  );
};
