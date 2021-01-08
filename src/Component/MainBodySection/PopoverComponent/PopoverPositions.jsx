import React from "react";
import { Button, Popover, OverlayTrigger } from "react-bootstrap";
export const PopoverPositions = () => {
  const popoverPosition = ["top", "right", "bottom", "left"];
  return (
    <div>
      <br />
      === Popover Positions Dynamically ===
      <br />
      {popoverPosition.map((item) => (
        <OverlayTrigger
          trigger="click"
          key={item}
          placement={item}
          overlay={
            <Popover id={`popover-positioned-${item}`}>
              <Popover.Title as="h3">{`Popover ${item}`}</Popover.Title>
              <Popover.Content>
                <strong>Holy guacamole!</strong> Check this info.
              </Popover.Content>
            </Popover>
          }
        >
          <Button variant="secondary" className="mt-4 mr-2">
            Popover on {item}
          </Button>
        </OverlayTrigger>
      ))}
    </div>
  );
};
