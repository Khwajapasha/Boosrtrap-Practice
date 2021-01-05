import React, { useState } from "react";
import { NavAlignment } from "./NavAlignment";
import { NavBasicExample } from "./NavBasicExample";
import { NavsAsLi } from "./NavsAsLi";
import { NavVerticalAlignment } from "./NavVerticalAlignment";
import { NavAsTab } from "./NavAsTab";
import { NavAsPills } from "./NavAsPills";
import { NavFillAndJustifyContentVariable } from "./NavFillAndJustifyContentVariable";
import { NavSameWidthItem } from "./NavSameWidthItem";
import { Button } from "react-bootstrap";
export const AllNavs = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <NavBasicExample />
          <NavsAsLi />
          <NavAlignment />
          <NavVerticalAlignment />
          <NavAsTab />
          <NavAsPills />
          <NavFillAndJustifyContentVariable />
          <NavSameWidthItem />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Navs</Button>
      </div>
    </React.Fragment>
  );
};
