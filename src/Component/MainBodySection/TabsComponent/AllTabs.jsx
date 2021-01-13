import { Button } from "bootstrap";
import React from "react";
import { TabBasicExample } from "./TabBasicExample";
import { TabControlled } from "./TabControlled";
import { TabCustomLayout } from "./TabCustomLayout";
import { TabWithoutAnimation } from "./TabWithoutAnimation";

export const AllTabs = () => {
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
