import React from "react";
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
export const OverlayTooltipPositions = () => {
  const OverlayTooltipPositions = ["top", "right", "bottom", "left"];
  return (
    <div>
      <br />
      === Overlay Tooltip Positions Loading Dynamically ===
      <br />
      {OverlayTooltipPositions.map((item) => (
        <OverlayTrigger
          key={item}
          placement={item}
          overlay={
            <Tooltip id={`tooltip-${item}`}>
              Tooltip on <strong>{item}</strong>.
            </Tooltip>
          }
        >
          <Button variant="secondary" className="mr-2 mt-4">
            Tooltip on {item}
          </Button>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default OverlayTooltipPositions;
