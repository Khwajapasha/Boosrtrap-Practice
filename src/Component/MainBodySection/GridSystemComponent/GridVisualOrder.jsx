import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridVisualOrder = () => {
  return (
    <div>
      <br />
      <h5>
        You can use the order property to control the visual order of your
        content.
      </h5>
      <Container>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col xs>First, but unordered</Col>
          <Col xs={{ order: 12 }}>Second, but last</Col>
          <Col xs={{ order: 1 }} style={{ backgroundColor: "yellow" }}>
            Third, but second
          </Col>
        </Row>
      </Container>
      <br />
      <h5>
        The order property also supports first (order: -1) and last (order:
        $columns+1).
      </h5>
      <br />
      <Container>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col xs={{ order: "last" }}>First, but last</Col>
          <Col xs style={{ backgroundColor: "yellow" }}>
            Second, but unordered
          </Col>
          <Col xs={{ order: "first" }}>Third, but first</Col>
        </Row>
      </Container>
      <br />
      <br />
      <h5>
        For offsetting grid columns you can set an offset value or for a more
        general layout, use the margin class utilities.
      </h5>
      <Container>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col md={4} style={{ backgroundColor: "yellow" }}>
            md=4
          </Col>
          <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
        </Row>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col
            md={{ span: 3, offset: 3 }}
            style={{ backgroundColor: "yellow" }}
          >{`md={{ span: 3, offset: 3 }}`}</Col>
          <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        </Row>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
        </Row>
      </Container>
    </div>
  );
};
