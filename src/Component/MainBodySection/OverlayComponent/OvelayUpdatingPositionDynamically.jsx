import React, { useState, useEffect } from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";
export const OvelayUpdatingPositionDynamically = () => {
  const UpdatingPopover = React.forwardRef(
    ({ popper, children, show: _, ...props }, ref) => {
      useEffect(() => {
        console.log("updating!");
        popper.scheduleUpdate();
      }, [children, popper]);
      return (
        <Popover ref={ref} content {...props}>
          {children}
        </Popover>
      );
    }
  );
  const longContent = `
  Very long
  Multiline content
  that is engaging and what-not
`;
  const shortContent = "Short and sweet!";

  function Example() {
    const [content, setContent] = useState(shortContent);

    useEffect(() => {
      const timerId = setInterval(() => {
        setContent(content === shortContent ? longContent : shortContent);
      }, 3000);

      return () => clearInterval(timerId);
    });

    return (
      <OverlayTrigger
        trigger="click"
        overlay={
          <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
        }
      >
        <Button>Holy guacamole!</Button>
      </OverlayTrigger>
    );
  }
};
