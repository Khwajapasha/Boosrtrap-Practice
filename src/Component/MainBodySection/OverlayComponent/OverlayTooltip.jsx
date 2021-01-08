import React, { useState, useRef } from "react";
import { Tooltip, Button, Overlay } from "react-bootstrap";
export const OverlayTooltip = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <div>
      <br />
      === Overlay Tooltip ===
      <br />
      <Button ref={target} onClick={() => setShow(!show)}>
        Click me!
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            My Tooltip
          </Tooltip>
        )}
      </Overlay>
    </div>
  );
};
