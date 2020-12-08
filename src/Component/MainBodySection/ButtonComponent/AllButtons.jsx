import React from "react";
import { ButtonBasicExample } from "./ButtonBasicExample";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { ButtonOutLine } from "./ButtonOutLine";
export const AllButtons = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ButtonBasicExample />
          <ButtonOutLine />
        </div>
      )}
      <Button onClick={() => setShow(!show)} className="mt-2">Click To Load All Buttons </Button>
    </React.Fragment>
  );
};
