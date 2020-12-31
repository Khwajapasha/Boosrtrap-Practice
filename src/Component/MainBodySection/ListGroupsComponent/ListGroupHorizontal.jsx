import React from "react";
import { ListGroup } from "react-bootstrap";
export const ListGroupHorizontal = () => {
  return (
    <div>
      <ListGroup horizontal>
        <ListGroup.Item>This</ListGroup.Item>
        <ListGroup.Item>ListGroup</ListGroup.Item>
        <ListGroup.Item>renders</ListGroup.Item>
        <ListGroup.Item>horizontally!</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
