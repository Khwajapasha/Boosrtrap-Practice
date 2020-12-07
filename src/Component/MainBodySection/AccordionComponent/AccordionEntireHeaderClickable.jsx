import React from "react";
import { Card, Accordion } from "react-bootstrap";
export const AccordionEntireHeaderClickable = () => {
  return (
    <div>
      <br /> ====== Entire Header Clickable Accordion ====== <br />
      <br />
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Click AnyWhere On Header !!!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Hello I Am Entire Header Clickable Accordion's Body
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Click Me Too AnyWhere On Header !!!
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Hello I Am also Entire Header Clickable Accordion's Body
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};
