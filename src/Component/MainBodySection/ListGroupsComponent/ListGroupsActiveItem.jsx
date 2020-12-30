import React from "react";
import { ListGroup } from "react-bootstrap";
export const ListGroupsActiveItem = () => {
  return (
    <div>
      <ListGroup as="ul" style={{ width: "20rem" }}>
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
