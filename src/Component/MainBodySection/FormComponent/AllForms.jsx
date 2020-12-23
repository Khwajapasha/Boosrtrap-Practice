import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FormControlComp } from "./FormControlComp";
import { FormBasic } from "./FormBasic";
import { FormForChooseFile } from "./FormForChooseFile";

export const AllForms = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <FormBasic />
          <FormControlComp />
          <FormForChooseFile />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Form</Button>
      </div>
    </React.Fragment>
  );
};
