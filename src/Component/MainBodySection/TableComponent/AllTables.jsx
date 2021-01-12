import React from "react";
import { TableBasicExample } from "./TableBasicExample";
import { TableSmall } from "./TableSmall";
import { TableDarkTheme } from "./TableDarkTheme";
import { TableAlwaysResponsive } from "./TableAlwaysResponsive";
import { TableSpecificBreakPoint } from "./TableSpecificBreakPoint";

export const AllTables = () => {
  return (
    <div>
      <TableBasicExample />
      <TableSmall />
      <TableDarkTheme />
      <TableAlwaysResponsive />
      <TableSpecificBreakPoint />
    </div>
  );
};
