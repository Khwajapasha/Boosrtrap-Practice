import React from "react";
import { Row } from "react-bootstrap";
import { LIstGroupBasicExample } from "./LIstGroupBasicExample";
import { ListGroupsActiveItem } from "./ListGroupsActiveItem";
export const AllListGroup = () => {
  return (
    <div className="mt-2">
      <Row>
        <LIstGroupBasicExample />
        <ListGroupsActiveItem />
      </Row>
    </div>
  );
};
