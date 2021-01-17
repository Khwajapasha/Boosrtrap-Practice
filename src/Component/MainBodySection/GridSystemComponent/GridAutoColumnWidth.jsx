import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridAutoColumnWidth = () => {
  return (
    <div>
      <br />
      <h4>
        When no column widths are specified the Col component will render equal
        width columns
      </h4>
      <br />
      <Container>
        <Row style={{ backgroundColor: "lightblue" }}>
          <Col style={{ backgroundColor: "yellow" }}>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col style={{ backgroundColor: "yellow" }}>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col style={{ backgroundColor: "yellow" }}>3 of 3</Col>
        </Row>
      </Container>
    </div>
  );
};
