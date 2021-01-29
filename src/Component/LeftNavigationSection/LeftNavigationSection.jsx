import React from "react";
import { Button } from "react-bootstrap";
import { AllInput } from "./InputComponent/AllInput";
import { AllLayout } from "./LayoutComponent/AllLayout";

export const LeftNavigationSection = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Implemented All Material UI Component</h1>
      </div>
      <div>
        <Button>Load All Material UI Component</Button>
      </div>
      <div>
        <AllLayout />
        <AllInput />
      </div>
    </React.Fragment>
  );
};
