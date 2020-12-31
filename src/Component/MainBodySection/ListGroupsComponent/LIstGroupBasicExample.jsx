import React from "react";
import { ListGroup } from "react-bootstrap";
export const LIstGroupBasicExample = () => {
  return (
    <div>
      <ListGroup style={{ width: "20rem" }}>
        <ListGroup.Item>This is the</ListGroup.Item>
        <ListGroup.Item>Basic example </ListGroup.Item>
        <ListGroup.Item>of ListGroup</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
