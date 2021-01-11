import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { SnippersInButtons } from "./SnippersInButtons";
import { SpinnerAnimation } from "./SpinnerAnimation";
import { SpinnerBasicExample } from "./SpinnerBasicExample";
import { SpinnerSizing } from "./SpinnerSizing";
import { SpinnerVariants } from "./SpinnerVariants";
export const AllSpinners = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <SpinnerBasicExample />
          <SpinnerAnimation />
          <SpinnerVariants />
          <SpinnerSizing />
          <SnippersInButtons />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Spinners</Button>
      </div>
    </React.Fragment>
  );
};
