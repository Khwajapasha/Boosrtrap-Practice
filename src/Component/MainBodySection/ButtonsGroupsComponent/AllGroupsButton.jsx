import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import {ButtonGroupNesting} from "./ButtonGroupNesting";
import { ButtonGroupsBasicExample } from "./ButtonGroupsBasicExample";
import { ButtonToolbarExample } from "./ButtonToolbarExample";
import { ButtonGroupsVerticlevariation } from "./ButtonGroupsVerticlevariation";
export const AllGroupsButton = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ButtonGroupsBasicExample />
          <ButtonToolbarExample />
          <ButtonGroupNesting />
          <ButtonGroupsVerticlevariation />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Click To Load All Button Groups </Button>
      </div>
    </React.Fragment>
  );
};
