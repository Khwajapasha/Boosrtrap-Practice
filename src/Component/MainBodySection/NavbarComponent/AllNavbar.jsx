import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavbarBasicExample } from "./NavbarBasicExample";
import { NavbarColors } from "./NavbarColors";

export const AllNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <NavbarBasicExample />
          <NavbarColors />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Navbars</Button>
      </div>
    </React.Fragment>
  );
};
