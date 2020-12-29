import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AddOnAsButton } from "./AddOnAsButton";
import { InputGroupBasicExample } from "./InputGroupBasicExample";
import { InputGroupSizing } from "./InputGroupSizing";
import { MultipleInputGroupsAddOn } from "./MultipleInputGroupsAddOn";
export const AllInputGroups = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div>
        <InputGroupBasicExample />
        <InputGroupSizing />
        <MultipleInputGroupsAddOn />
        <AddOnAsButton />
      </div>
      <div>
        <Button onClick={() => setShow(!show)}>Load all input groups</Button>
      </div>
    </React.Fragment>
  );
};
