import React from "react";
import { OverlayTrigger, Button, Tooltip } from "react-bootstrap";
export const OverlayTriggerComp = () => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    <div>
      <br />
      === Hover to see overlay ===
      <br />
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <Button variant="success">Hover me to see</Button>
      </OverlayTrigger>
    </div>
  );
};
