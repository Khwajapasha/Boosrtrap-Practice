import React from "react";
import { Row } from "react-bootstrap";
import { LIstGroupBasicExample } from "./LIstGroupBasicExample";
import { ListGroupsActiveItem } from "./ListGroupsActiveItem";
import { ListGroupDisabledItem } from "./ListGroupDisabledItem";
import { ListGroupActionableItem } from "./ListGroupActionableItem";
export const AllListGroup = () => {
  return (
    <div className="mt-2">
      <Row>
        <LIstGroupBasicExample />
        <ListGroupsActiveItem />
        <ListGroupDisabledItem />
        <ListGroupActionableItem />
      </Row>
    </div>
  );
};
