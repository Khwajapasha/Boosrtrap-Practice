import React from "react";
import { OverlayTrigger, Image, Button, Tooltip } from "react-bootstrap";
export const OverlayCustomizingOverlayBehavior = () => {
  return (
    <div>
      <br />
      === Customized Overlay ===
      <br />
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
      >
        {({ ref, ...triggerHandler }) => (
          <Button
            variant="light"
            {...triggerHandler}
            className="d-inline-flex align-items-center"
          >
            <Image
              ref={ref}
              roundedCircle
              src="/Assets/BlueRose.jpg"
              style={{ width: "2rem", height: "2rem" }}
            />
            <span className="ml-1">Hover to see</span>
          </Button>
        )}
      </OverlayTrigger>
    </div>
  );
};
