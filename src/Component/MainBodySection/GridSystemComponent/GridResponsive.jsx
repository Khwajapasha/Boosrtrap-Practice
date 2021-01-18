import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridResponsive = () => {
  return (
    <div>
      <Container>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col xm={8} style={{ backgroundColor: "yellow" }}>
            sm=8
          </Col>
          <Col xm={4}>sm=4</Col>
        </Row>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col sm>sm=true</Col>
          <Col sm style={{ backgroundColor: "yellow" }}>
            sm=true
          </Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  );
};
