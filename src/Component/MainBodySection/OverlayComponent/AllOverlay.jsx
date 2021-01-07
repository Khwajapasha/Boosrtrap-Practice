import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { OverlayBasicExample } from "./OverlayBasicExample";
import { OverlayTriggerComp } from "./OverlayTriggerComp";
import { OverlayCustomizingOverlayBehavior } from "./OverlayCustomizingOverlayBehavior";

export const AllOverlay = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <OverlayBasicExample />
          <OverlayTriggerComp />
          <OverlayCustomizingOverlayBehavior />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Overlay</Button>
      </div>
    </React.Fragment>
  );
};
