import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ButtonGroupsBasicExample } from "./ButtonGroupsBasicExample";
import { ButtonToolbarExample } from "./ButtonToolbarExample";
export const AllGroupsButton = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ButtonGroupsBasicExample />
          <ButtonToolbarExample />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Click To Load All Button Groups </Button>
      </div>
    </React.Fragment>
  );
};
