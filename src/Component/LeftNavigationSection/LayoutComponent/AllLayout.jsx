import React from "react";
import { ContainerBasicExample } from "./ContainerComponent/ContainerBasicExample";
import { BoxBasicExample } from "./BoxComponent/BoxBasicExample";
import AllGrid from "./GridComponent/AllGrid";
export const AllLayout = () => {
  return (
    <div>
      <BoxBasicExample />
      <ContainerBasicExample />
      <AllGrid />
    </div>
  );
};
