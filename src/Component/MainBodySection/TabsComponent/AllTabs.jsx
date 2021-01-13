import React from "react";
import { TabBasicExample } from "./TabBasicExample";
import { TabControlled } from "./TabControlled";
import { TabWithoutAnimation } from "./TabWithoutAnimation";

export const AllTabs = () => {
  return (
    <div>
      <TabBasicExample />
      <TabControlled />
      <TabWithoutAnimation />
    </div>
  );
};
