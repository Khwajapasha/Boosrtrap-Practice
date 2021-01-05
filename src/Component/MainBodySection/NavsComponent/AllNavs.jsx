import React from "react";
import { NavAlignment } from "./NavAlignment";
import { NavBasicExample } from "./NavBasicExample";
import { NavsAsLi } from "./NavsAsLi";
import { NavVerticalAlignment } from "./NavVerticalAlignment";

export const AllNavs = () => {
  return (
    <div>
      <NavBasicExample />
      <NavsAsLi />
      <NavAlignment />
      <NavVerticalAlignment />
    </div>
  );
};
