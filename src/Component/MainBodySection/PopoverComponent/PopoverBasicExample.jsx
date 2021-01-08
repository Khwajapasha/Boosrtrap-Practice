import React from "react";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";
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
    </div>
  );
};

export default PopoverBasicExample;
