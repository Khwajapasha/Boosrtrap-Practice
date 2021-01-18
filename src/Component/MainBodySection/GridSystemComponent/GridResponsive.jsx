import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridResponsive = () => {
  return (
    <div>
      <br />
      <h5>
        The Col lets you specify column widths across 5 breakpoint sizes (xs,
        sm, md, lg, and xl). For every breakpoint, you can specify the amount of
        columns to span, or set the prop to <Col lg={true} /> for auto layout
        widths.
      </h5>
      <br />
      <Container>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col xm={8} style={{ backgroundColor: "yellow" }}>
            xm=8
          </Col>
          <Col xm={4}>xm=4</Col>
        </Row>
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col sm>sm=true</Col>
          <Col sm style={{ backgroundColor: "yellow" }}>
            sm=true
          </Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
      <br />
      <br />
      <Container>
        <h5>
          You can also mix and match breakpoints to create different grids
          depending on the screen size.
        </h5>
        <br />
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col xs={12} md={8}>
            xs=12 md=8
          </Col>
          <Col xs={6} md={4} style={{ backgroundColor: "yellow" }}>
            xs=6 md=4
          </Col>
        </Row>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4} style={{ backgroundColor: "yellow" }}>
            xs=6 md=4
          </Col>
          <Col xs={6} md={4}>
            xs=6 md=4
          </Col>
        </Row>
        {/* Columns are always 50% wide, on mobile and desktop */}
        <Row style={{ backgroundColor: "lightblue" }} className="mt-2">
          <Col xs={6}>xs=6</Col>
          <Col xs={6} style={{ backgroundColor: "yellow" }}>
            xs=6
          </Col>
        </Row>
      </Container>
      <br />
    </div>
  );
};
