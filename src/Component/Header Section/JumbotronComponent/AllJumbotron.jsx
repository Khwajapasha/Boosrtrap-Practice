import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { JumbotronBasicExample } from "./JumbotronBasicExample";
import { JumbotronFluid } from "./JumbotronFluid";
export const AllJumbotron = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <JumbotronBasicExample />
          <JumbotronFluid />
        </div>
      )}
      <div className="mb-2 mt-2">
        <Button onClick={() => setShow(!show)}>Load All Jumbotron</Button>
      </div>
    </React.Fragment>
  );
};
