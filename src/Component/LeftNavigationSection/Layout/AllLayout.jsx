import React from "react";
import { ContainerBasicExample } from "./ContainerComponent/ContainerBasicExample";
import { BoxBasicExample } from "./BoxComponent/BoxBasicExample";
export const AllLayout = () => {
  return (
    <div>
      <BoxBasicExample />
      <ContainerBasicExample />
    </div>
  );
};
