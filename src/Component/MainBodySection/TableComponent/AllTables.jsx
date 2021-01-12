import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { TableBasicExample } from "./TableBasicExample";
import { TableSmall } from "./TableSmall";
import { TableDarkTheme } from "./TableDarkTheme";
import { TableAlwaysResponsive } from "./TableAlwaysResponsive";
import { TableSpecificBreakPoint } from "./TableSpecificBreakPoint";

export const AllTables = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <TableBasicExample />
          <TableSmall />
          <TableDarkTheme />
          <TableAlwaysResponsive />
          <TableSpecificBreakPoint />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Tables</Button>
      </div>
    </React.Fragment>
  );
};
