import React from "react";
import { GridBasicExample } from "./GridBasicExample";
import { GridAutoColumnWidth } from "./GridAutoColumnWidth";
import { GridSettingOneColumnWidth } from "./GridSettingOneColumnWidth";

export const AllGrid = () => {
  return (
    <div>
      <GridBasicExample />
      <GridAutoColumnWidth />
      <GridSettingOneColumnWidth />
    </div>
  );
};
