import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FormControlComp } from "./FormControlComp";
import { FormBasic } from "./FormBasic";
import { FormForChooseFile } from "./FormForChooseFile";
import { FormSizing } from "./FormSizing";
import { CheckBoxAndRedioButton } from "./CheckBoxAndRedioButton";
import { FormGridAndRow } from "./FormGridAndRow";
import { FormHorizontol } from "./FormHorizontol";
import { FormValidation } from "./FormValidation";
import { FormValidationFormik } from "./FormValidationFormik";
import { FormValidationTooltips } from "./FormValidationTooltips";
import { FormSwitches } from "./FormSwitches";

export const AllForms = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <FormBasic />
          <FormControlComp />
          <FormForChooseFile />
          <FormSizing />
          <CheckBoxAndRedioButton />
          <FormGridAndRow />
          <FormHorizontol />
          <FormValidation />
          <FormValidationFormik />
          <FormValidationTooltips />
          <FormSwitches />
        </div>
      )}

      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Form</Button>
      </div>
    </React.Fragment>
  );
};
