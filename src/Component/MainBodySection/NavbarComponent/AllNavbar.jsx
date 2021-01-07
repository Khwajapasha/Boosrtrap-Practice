import React from "react";
import { NavbarBasicExample } from "./NavbarBasicExample";
import { NavbarColors } from "./NavbarColors";

export const AllNavbar = () => {
  return (
    <React.Fragment>
      <div>
        <NavbarBasicExample />
        <NavbarColors />
      </div>
    </React.Fragment>
  );
};
