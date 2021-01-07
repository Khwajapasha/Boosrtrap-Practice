import React from "react";
import { OverlayBasicExample } from "./OverlayBasicExample";
import { OverlayTriggerComp } from "./OverlayTriggerComp";
import { OverlayCustomizingOverlayBehavior } from "./OverlayCustomizingOverlayBehavior";
import { OvelayUpdatingPositionDynamically } from "./OvelayUpdatingPositionDynamically";

export const AllOverlay = () => {
  return (
    <div>
      <OverlayBasicExample />
      <OverlayTriggerComp />
      <OverlayCustomizingOverlayBehavior />
      <OvelayUpdatingPositionDynamically />
    </div>
  );
};
