import React from "react";
import { Card } from "react-bootstrap";
export const CardHeaderAndFooter = () => {
  return (
    <div >
      <Card style={{ width: "12rem",marginTop:"5rem" }}>
        <Card.Header>Crad Header</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.{" "}
            </p>
            <footer className="blockquote-footer">
              This is the <cite title="Source Title">Footer Of Card</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
};
