import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridBasicExample = () => {
  return (
    <div>
      <br />
      === Container ===
      <br />
      <Container>
        <Row style={{ backgroundColor: "lightblue" }}>
          <Col>1 Column in entire row</Col>
        </Row>
      </Container>
      <br />
      === Container fluid ===
      <br />
      <Container fluid style={{ backgroundColor: "lightblue" }}>
        <Row>
          <Col>1 Column in entire row</Col>
        </Row>
      </Container>
    </div>
  );
};
