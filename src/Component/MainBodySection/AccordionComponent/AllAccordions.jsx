import React, { useState } from "react";
import { AccordionBasicExample } from "./AccordionBasicExample";
import { AccordionFullyCollapsState } from "./AccordionFullyCollapsState";
import { AccordionEntireHeaderClickable } from "./AccordionEntireHeaderClickable";
import { Button } from "react-bootstrap";
export const AllAccordions = () => {
  const [show, setShow] = useState(false);

  return (
    <React.Fragment>
      {show && (
        <div>
          <AccordionBasicExample />
          <AccordionFullyCollapsState />
          <AccordionEntireHeaderClickable />
        </div>
      )}
      <Button onClick={() => setShow(!show)}>
        Click To Load All Accordions
      </Button>
    </React.Fragment>
  );
};
