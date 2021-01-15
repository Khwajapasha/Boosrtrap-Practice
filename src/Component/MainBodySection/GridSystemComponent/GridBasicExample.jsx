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
      <br />
      === You can set breakpoints for the fluid prop. Setting it to a breakpoint
      (sm, md, lg, xl) will set the Container as fluid until the specified
      breakpoint. ===
      <br />
      <Container fluid="sm" style={{ backgroundColor: "lightblue" }}>
        <Row>
          <Col>1 Column in entire row</Col>
        </Row>
      </Container>
    </div>
  );
};
