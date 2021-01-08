import React from "react";
import { Popover, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
export const PopoverBasicExample = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Popover right</Popover.Title>
      <Popover.Content>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Content>
    </Popover>
  );
  return (
    <div>
      <br />
      ===Basic Example of popover ===
      <br />
      <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Click me to see</Button>
      </OverlayTrigger>
      <br />
      <br />
      <br />
      <h4>Disabled Button</h4>
      <OverlayTrigger
        overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}
      >
        <span className="d-inline-block">
          <Button disabled style={{ pointerEvents: "none" }}>
            Disabled button
          </Button>
        </span>
      </OverlayTrigger>
    </div>
  );
};
