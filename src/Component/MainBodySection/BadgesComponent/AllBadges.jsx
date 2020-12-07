import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { BadgesBasicExample } from "./BadgesBasicExample";
import { BadgeColors } from "./BadgesColors";
export const AllBadges = () => {
    const [show,setShow]=useState(false)
  return (
    <React.Fragment>
      {show&&(<div>
        <BadgesBasicExample />
        <BadgeColors />
      </div>)}

      <Button onClick={()=>setShow(!show)}>Click Here To Load All Badges </Button>{" "}
    </React.Fragment>
  );
};
