import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { InputGroupAddOnAsButton } from "./InputGroupAddOnAsButton";
import { InputGroupBasicExample } from "./InputGroupBasicExample";
import { InputGroupSizing } from "./InputGroupSizing";
import { MultipleInputGroupsAddOn } from "./MultipleInputGroupsAddOn";
import { InputGroupAddOnAsDropDown } from "./InputGroupAddOnAsDropDown";
export const AllInputGroups = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <InputGroupBasicExample />
          <InputGroupSizing />
          <MultipleInputGroupsAddOn />
          <InputGroupAddOnAsButton />
          <InputGroupAddOnAsDropDown />
        </div>
      )}
      <div>
        <Button onClick={() => setShow(!show)} className="mt-2">
          Load all input groups
        </Button>
      </div>
    </React.Fragment>
  );
};
