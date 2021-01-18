import React from "react";
import { GridBasicExample } from "./GridBasicExample";
import { GridAutoColumnWidth } from "./GridAutoColumnWidth";
import { GridSettingOneColumnWidth } from "./GridSettingOneColumnWidth";
import { GridVariableWidthContent } from "./GridVariableWidthContent";
import { GridResponsive } from "./GridResponsive";
import { GridVisualOrder } from "./GridVisualOrder";

export const AllGrid = () => {
  return (
    <div>
      <GridBasicExample />
      <GridAutoColumnWidth />
      <GridSettingOneColumnWidth />
      <GridVariableWidthContent />
      <GridResponsive />
      <GridVisualOrder />
    </div>
  );
};
