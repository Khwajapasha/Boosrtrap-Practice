import React from "react";
import { Card } from "react-bootstrap";
export const CardBorderColor = () => {
  return (
    <div>
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>Primary Card Border </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
