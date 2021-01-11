import React from "react";
import { TableBasicExample } from "./TableBasicExample";
import { TableSmall } from "./TableSmall";
import { TableDarkTheme } from "./TableDarkTheme";

export const AllTables = () => {
  return (
    <div>
      <TableBasicExample />
      <TableSmall />
      <TableDarkTheme />
    </div>
  );
};
