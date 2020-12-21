import React, { useState } from 'react';
import {DropDownBasicExample} from './DropDownBasicExample';
import {Button} from "react-bootstrap"
import { DropDownDynamicColors } from './DropDownDynamicColors';
export const AllDropDown = () => {
    const [show,setShow]=useState(false)
    return (
      <React.Fragment>
        {show && (
          <div>
            <DropDownBasicExample />
            <DropDownDynamicColors/>
          </div>
        )}
        <div className="mt-2">
          <Button onClick={() => setShow(!show)}>Load all DropDowns</Button>
        </div>
      </React.Fragment>
    );
};

