import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import { LIstGroupBasicExample } from "./LIstGroupBasicExample";
import { ListGroupsActiveItem } from "./ListGroupsActiveItem";
import { ListGroupDisabledItem } from "./ListGroupDisabledItem";
import { ListGroupActionableItem } from "./ListGroupActionableItem";
import { ListGroupHorizontal } from "./ListGroupHorizontal";
import { ListGroupResponsiveHorizotalView } from "./ListGroupResponsiveHorizotalView";
import { ListGroupVariant } from "./ListGroupVariant";
import { ListGroupTabbedInterface } from "./ListGroupTabbedInterface";
export const AllListGroup = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div className="mt-2 ml-4">
          <Row>
            <LIstGroupBasicExample />
            <ListGroupsActiveItem />
            <ListGroupDisabledItem />
            <ListGroupActionableItem />
            <ListGroupHorizontal />
            <ListGroupResponsiveHorizotalView />
            <ListGroupVariant />
            <ListGroupTabbedInterface />
          </Row>
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load all List Group</Button>
      </div>
    </React.Fragment>
  );
};
