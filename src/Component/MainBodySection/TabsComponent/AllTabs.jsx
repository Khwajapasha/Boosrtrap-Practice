import React from "react";
import { TabBasicExample } from "./TabBasicExample";
import { TabControlled } from "./TabControlled";

export const AllTabs = () => {
  return (
    <div>
      <TabBasicExample />
      <TabControlled />
    </div>
  );
};
