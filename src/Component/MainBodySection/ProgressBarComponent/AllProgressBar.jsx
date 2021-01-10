import React, { useState } from "react";
import { ProgressBarBasicExample } from "./ProgressBarBasicExample";
import { ProgressBarContextualAlternative } from "./ProgressBarContextualAlternative";
import { ProgressBarScreenReadOnly } from "./ProgressBarScreenReadOnly";
import { ProgressBarWithLabel } from "./ProgressBarWithLabel";
import { ProgressBarStrippedVariant } from "./ProgressBarStrippedVariant";
import { ProgressBarAnimated } from "./ProgressBarAnimated";
import { Button } from "react-bootstrap";

export const AllProgressBar = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ProgressBarBasicExample />
          <ProgressBarWithLabel />
          <ProgressBarScreenReadOnly />
          <ProgressBarContextualAlternative />
          <ProgressBarStrippedVariant />
          <ProgressBarAnimated />
        </div>
      )}
      <div>
        <Button onClick={() => setShow(!show)}>Load All ProgressBar</Button>
      </div>
    </React.Fragment>
  );
};
