import React from "react";
import { NavAlignment } from "./NavAlignment";
import { NavBasicExample } from "./NavBasicExample";
import { NavsAsLi } from "./NavsAsLi";
import { NavVerticalAlignment } from "./NavVerticalAlignment";
import { NavAsTab } from "./NavAsTab";
import { NavAsPills } from "./NavAsPills";

export const AllNavs = () => {
  return (
    <div>
      <NavBasicExample />
      <NavsAsLi />
      <NavAlignment />
      <NavVerticalAlignment />
      <NavAsTab />
      <NavAsPills />
    </div>
  );
};
