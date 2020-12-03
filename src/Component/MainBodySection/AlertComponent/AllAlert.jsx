import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { AlertAdditionalContent } from './AlertAdditionalContent';
import { AlertDismisable } from './AlertDismisable';
import { AlertDismisableVisual } from "./AlertDismisableVisual";
import { AlertVariant } from './AlertVariant';
import { AlertVariantLink } from './AlertVariantLink';
export const AllAlert = () => {
    const [show,setShow]=useState(false)
    return (
      <React.Fragment>
        {show && (
          <div>
            <AlertVariant />
            <AlertVariantLink />
            <AlertAdditionalContent />
            <AlertDismisable />
            <AlertDismisableVisual />
          </div>
        )}
        <Button variant="success"onClick={() => setShow(!show)}>
          Click Me To Load All Alert{" "}
        </Button>
      </React.Fragment>
    );
}
 

