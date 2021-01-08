import React, { useState, useRef } from "react";
import { Button, Overlay, Popover } from "react-bootstrap";
export const PopoverChangingContainer = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <div>
      <div ref={ref}>
        <Button onClick={handleClick}>Click me</Button>

        <Overlay
          show={show}
          target={target}
          placement="bottom"
          container={ref.current}
          containerPadding={20}
          //We can hide popover by clicking outside of window by using following 2 line
          //   rootClose
          //   onHide={() => setShow(false)}
        >
          <Popover id="popover-contained">
            <Popover.Title as="h3">Popover bottom</Popover.Title>
            <Popover.Content>
              <strong>Holy guacamole!</strong> Check this info.
            </Popover.Content>
          </Popover>
        </Overlay>
      </div>
    </div>
  );
};
