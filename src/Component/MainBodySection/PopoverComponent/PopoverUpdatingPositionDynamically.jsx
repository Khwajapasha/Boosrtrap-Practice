import React, { useState, useEffect } from "react";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";

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

export const PopoverUpdatingPositionDynamically = () => {
  const [content, setContent] = useState(shortContent);

  useEffect(() => {
    const timerId = setInterval(() => {
      setContent(content === shortContent ? longContent : shortContent);
    }, 3000);

    return () => clearInterval(timerId);
  });
  return (
    <div className="mt-2">
      <br />
      === Dynamic Updating Popover Messages ===
      <br />
      <OverlayTrigger
        trigger="click"
        overlay={
          <UpdatingPopover id="popover-contained">{content}</UpdatingPopover>
        }
      >
        <Button>Dynmaic Popover</Button>
      </OverlayTrigger>
    </div>
  );
};
