import React from "react";
import { TabBasicExample } from "./TabBasicExample";
import { TabControlled } from "./TabControlled";
import { TabCustomLayout } from "./TabCustomLayout";
import { TabWithoutAnimation } from "./TabWithoutAnimation";

export const AllTabs = () => {
  return (
    <div>
      <TabBasicExample />
      <TabControlled />
      <TabWithoutAnimation />
      <TabCustomLayout />
    </div>
  );
};
