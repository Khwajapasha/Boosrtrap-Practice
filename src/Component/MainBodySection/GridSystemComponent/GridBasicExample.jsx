import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridBasicExample = () => {
  return (
    <div>
      <br />
      === Container ===
      <br />
      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
      <br />
      === Container fluid ===
      <br />
      <Container fluid>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    </div>
  );
};
