import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AllJumbotron } from "./JumbotronComponent/AllJumbotron";
import { AddMultipleDivOnClick } from "./AddMultipleDivOnclik/AddMultipleDivOnClick";

export const HeaderSection = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <AllJumbotron />
          <AddMultipleDivOnClick />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>
          Load All Header Component
        </Button>
      </div>
    </React.Fragment>
  );
};
