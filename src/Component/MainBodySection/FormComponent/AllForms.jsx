import React from "react";
import { FormControlComp } from "./FormControlComp";
import { FormBasic } from "./FormBasic";
import { FormForChooseFile } from "./FormForChooseFile";

export const AllForms = () => {
  return (
    <div>
      <FormBasic />
      <FormControlComp />
      <FormForChooseFile />
    </div>
  );
};
