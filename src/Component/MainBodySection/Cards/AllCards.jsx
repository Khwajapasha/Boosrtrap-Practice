import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { CardBasicExample } from "./CardBasicExample";
import {CardDynamicLoaded} from "./CardDynamicLoaded";
import { CardHeaderAndFooter } from "./CardHeaderAndFooter";
import { CardImageOverlay } from "./CardImageOverlay";
import {CardNavigation} from "./CardNavigation";
import { CardBorderColor } from "./CardBorderColor";
export const AllCards = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <Row>
            <CardBasicExample />
            <CardHeaderAndFooter />
            <CardImageOverlay />
            <CardNavigation />
            <CardDynamicLoaded />
            <CardBorderColor />
          </Row>
          
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>
          {" "}
          Click to load all cards{" "}
        </Button>
      </div>
    </React.Fragment>
  );
};
