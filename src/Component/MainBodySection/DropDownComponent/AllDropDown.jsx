import React, { useState } from "react";
import { DropDownBasicExample } from "./DropDownBasicExample";
import { Button } from "react-bootstrap";
import { DropDownDynamicColors } from "./DropDownDynamicColors";
import { DropDownSplitButton } from "./DropDownSplitButton";
import { DropDownSizing } from "./DropDownSizing";
import { DropDownDirection } from "./DropDownDirection";
export const AllDropDown = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <DropDownBasicExample />
          <DropDownDynamicColors />
          <DropDownSplitButton />
          <DropDownSizing />
          <DropDownDirection />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load all DropDowns</Button>
      </div>
    </React.Fragment>
  );
};
