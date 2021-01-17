import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridSettingOneColumnWidth = () => {
  return (
    <div>
      <br />
      <p>
        Auto-layout for flexbox grid columns also means you can set the width of
        one column and have the sibling columns automatically resize around it.
        You may use predefined grid classes (as shown below), grid mixins, or
        inline widths. Note that the other columns will resize no matter the
        width of the center column.
      </p>
      <br />
      <Container>
        <Row style={{ backgroundColor: "lightblue" }}>
          <Col style={{ backgroundColor: "yellow" }}>1 of 3</Col>
          <Col xs={6}>2 of 3 (wider)</Col>
          <Col style={{ backgroundColor: "yellow" }}>3 of 3</Col>
        </Row>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col>1 of 3</Col>
          <Col xs={5} style={{ backgroundColor: "yellow" }}>
            2 of 3 (wider)
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};
