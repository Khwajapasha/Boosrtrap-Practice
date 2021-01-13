import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TabBasicExample } from "./TabBasicExample";
import { TabControlled } from "./TabControlled";
import { TabCustomLayout } from "./TabCustomLayout";
import { TabWithoutAnimation } from "./TabWithoutAnimation";

export const AllTabs = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <TabBasicExample />
          <TabControlled />
          <TabWithoutAnimation />
          <TabCustomLayout />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Tabs</Button>
      </div>
    </React.Fragment>
  );
};
