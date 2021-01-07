import React from "react";
import { OverlayBasicExample } from "./OverlayBasicExample";
import { OverlayTriggerComp } from "./OverlayTriggerComp";
import { OverlayCustomizingOverlayBehavior } from "./OverlayCustomizingOverlayBehavior";

export const AllOverlay = () => {
  return (
    <div>
      <OverlayBasicExample />
      <OverlayTriggerComp />
      <OverlayCustomizingOverlayBehavior />
    </div>
  );
};
