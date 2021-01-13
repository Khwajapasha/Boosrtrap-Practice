import { Button } from "bootstrap";
import React, { useState } from "react";
import { TabBasicExample } from "./TabBasicExample";
import { TabControlled } from "./TabControlled";
import { TabCustomLayout } from "./TabCustomLayout";
import { TabWithoutAnimation } from "./TabWithoutAnimation";

export const AllTabs = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      <div>
        <TabBasicExample />
        <TabControlled />
        <TabWithoutAnimation />
        <TabCustomLayout />
      </div>
      <div>
        <Button>Load All Tabs</Button>
      </div>
    </React.Fragment>
  );
};
