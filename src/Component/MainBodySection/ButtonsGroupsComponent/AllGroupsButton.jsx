import React from 'react';
import {Button} from "react-bootstrap"
import { ButtonGroupsBasicExample } from "./ButtonGroupsBasicExample";
import {ButtonToolbarExample} from "./ButtonToolbarExample"
export const AllGroupsButton = () => {
    return (
      <React.Fragment>
        <div>
          <ButtonGroupsBasicExample />
          <ButtonToolbarExample />
        </div>
        <div>
            <Button></Button>
        </div>
      </React.Fragment>
    );

};

