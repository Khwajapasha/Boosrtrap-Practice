import React from "react";
import { ButtonBasicExample } from "./ButtonBasicExample";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { ButtonOutLine } from "./ButtonOutLine";
import { ButtonTags } from "./ButtonTags";
import { ButtonSizes } from "./ButtonSizes";
import {ButtonStates} from "./ButtonStates";
import { ButtonLoadingState } from "./ButtonLoadingState";
export const AllButtons = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ButtonBasicExample />
          <ButtonOutLine />
          <ButtonTags />
          <ButtonSizes />
          <ButtonStates/>
          <ButtonLoadingState/>
        </div>
      )}
      <Button onClick={() => setShow(!show)} className="mt-2">
        Click To Load All Buttons{" "}
      </Button>
    </React.Fragment>
  );
};
