import React from "react";
import { TableBasicExample } from "./TableBasicExample";
import { TableSmall } from "./TableSmall";
import { TableDarkTheme } from "./TableDarkTheme";
import { TableAlwaysResponsive } from "./TableAlwaysResponsive";

export const AllTables = () => {
  return (
    <div>
      <TableBasicExample />
      <TableSmall />
      <TableDarkTheme />
      <TableAlwaysResponsive />
    </div>
  );
};
