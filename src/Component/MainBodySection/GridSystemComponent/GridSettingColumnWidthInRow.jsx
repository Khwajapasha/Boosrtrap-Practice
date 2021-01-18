import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export const GridSettingColumnWidthInRow = () => {
  return (
    <div>
      <br />
      <h5>
        The Row lets you specify column widths across 5 breakpoint sizes (xs,
        sm, md, lg, and xl). For every breakpoint, you can specify the amount of
        columns that will fit next to each other.
      </h5>
      <br />
      <Container>
        <Row
          xs={2}
          md={4}
          lg={6}
          style={{ backgroundColor: "lightblue" }}
          className="mt-2"
        >
          <Col>1 of 2</Col>
          <Col style={{ backgroundColor: "yellow" }}>2 of 2</Col>
        </Row>
        <Row
          xs={1}
          md={2}
          style={{ backgroundColor: "lightblue" }}
          className="mt-2"
        >
          <Col>Column 1</Col>
          <Col style={{ backgroundColor: "yellow" }}>Column 2</Col>
          <Col style={{ backgroundColor: "pink" }}>Column 3</Col>
        </Row>
      </Container>
    </div>
  );
};
