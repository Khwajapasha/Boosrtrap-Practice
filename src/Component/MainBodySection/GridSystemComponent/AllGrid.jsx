import React, { useState } from "react";
import { GridBasicExample } from "./GridBasicExample";
import { GridAutoColumnWidth } from "./GridAutoColumnWidth";
import { GridSettingOneColumnWidth } from "./GridSettingOneColumnWidth";
import { GridVariableWidthContent } from "./GridVariableWidthContent";
import { GridResponsive } from "./GridResponsive";
import { GridVisualOrder } from "./GridVisualOrder";
import { GridSettingColumnWidthInRow } from "./GridSettingColumnWidthInRow";
import { Button } from "react-bootstrap";

export const AllGrid = () => {
  const [show, setShow] = useState(false);
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
      <div>
        <Button>Load All Grid</Button>
      </div>
    </React.Fragment>
  );
};
