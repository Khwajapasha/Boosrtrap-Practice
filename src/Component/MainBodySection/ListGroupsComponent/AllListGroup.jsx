import React from "react";
import { Row } from "react-bootstrap";
import { LIstGroupBasicExample } from "./LIstGroupBasicExample";
import { ListGroupsActiveItem } from "./ListGroupsActiveItem";
import { ListGroupDisabledItem } from "./ListGroupDisabledItem";
import { ListGroupActionableItem } from "./ListGroupActionableItem";
import { ListGroupHorizontal } from "./ListGroupHorizontal";
import { ListGroupResponsiveHorizotalView } from "./ListGroupResponsiveHorizotalView";
import { ListGroupVariant } from "./ListGroupVariant";
export const AllListGroup = () => {
  return (
    <div className="mt-2">
      <Row>
        <LIstGroupBasicExample />
        <ListGroupsActiveItem />
        <ListGroupDisabledItem />
        <ListGroupActionableItem />
        <ListGroupHorizontal />
        <ListGroupResponsiveHorizotalView />
        <ListGroupVariant />
      </Row>
    </div>
  );
};
