import React from "react";
import { ListGroup } from "react-bootstrap";
export const ListGroupDisabledItem = () => {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item disabled>This is disabled item</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
