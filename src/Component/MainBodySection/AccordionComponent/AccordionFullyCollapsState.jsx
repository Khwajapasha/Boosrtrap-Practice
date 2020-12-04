import React from "react";
import { Button, Card, Accordion } from "react-bootstrap";

export const AccordionFullyCollapsState = () => {
  return (
    <div>
      <br />
      Fully Collapsed State Accordion Starts From Here
      <br />
      <br />
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click Me!!!!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I Am The Fully Collapsed Accordion</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Clcik Me To !!!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I Am Also Fully Collapsed Accordion</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
