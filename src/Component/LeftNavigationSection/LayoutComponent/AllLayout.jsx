import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ContainerBasicExample } from "./ContainerComponent/ContainerBasicExample";
import { BoxBasicExample } from "./BoxComponent/BoxBasicExample";
import AllGrid from "./GridComponent/AllGrid";
export const AllLayout = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load Layout</Button>
      </div>
      {show && (
        <div>
          <BoxBasicExample />
          <ContainerBasicExample />
          <AllGrid />
        </div>
      )}
    </React.Fragment>
  );
};
