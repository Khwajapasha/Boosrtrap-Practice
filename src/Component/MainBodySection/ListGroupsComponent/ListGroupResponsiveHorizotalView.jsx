import React from "react";
import { ListGroup } from "react-bootstrap";
export const ListGroupResponsiveHorizotalView = () => {
  const ResponsiveHorizotalView = ["sm", "md", "lg", "xl"];

  return (
    <div>
      {ResponsiveHorizotalView.map((breakpoint, idx) => (
        <ListGroup horizontal={breakpoint} className="my-2" key={idx}>
          <ListGroup.Item>This ListGroup</ListGroup.Item>
          <ListGroup.Item>renders horizontally</ListGroup.Item>
          <ListGroup.Item>on {breakpoint}</ListGroup.Item>
          <ListGroup.Item>and above!</ListGroup.Item>
        </ListGroup>
      ))}
      ;
    </div>
  );
};
