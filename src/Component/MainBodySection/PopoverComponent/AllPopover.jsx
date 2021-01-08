import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { PopoverBasicExample } from "./PopoverBasicExample";
import { PopoverPositions } from "./PopoverPositions";
import { PopoverChangingContainer } from "./PopoverChangingContainer";
import { PopoverUpdatingPositionDynamically } from "./PopoverUpdatingPositionDynamically";
export const AllPopover = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <PopoverBasicExample />
          <PopoverPositions />
          <PopoverChangingContainer />
          <PopoverUpdatingPositionDynamically />
        </div>
      )}
      <div>
        <Button onClick={() => setShow(!show)}>Load All Popovers</Button>
      </div>
    </React.Fragment>
  );
};
