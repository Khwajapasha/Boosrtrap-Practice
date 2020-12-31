import React from "react";
import { ListGroup } from "react-bootstrap";
export const ListGroupActionableItem = () => {
  const handleClick = () => {
    alert("This is actionable link");
  };
  return (
    <div>
      <ListGroup defaultActiveKey="#link1">
        <ListGroup.Item action href="#link1">
          Link 1 this is the
        </ListGroup.Item>
        <ListGroup.Item action href="#link2" disabled>
          Link 2 actionable comonent
        </ListGroup.Item>
        <ListGroup.Item action onClick={handleClick}>
          Click to view action
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};
