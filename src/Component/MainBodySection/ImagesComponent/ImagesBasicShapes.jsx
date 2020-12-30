import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
export const ImagesBasicShapes = () => {
  return (
    <Container className="mt-2">
      <br />
      === By Using Image Tag ===
      <Row>
        <Col xs={12} sm={8} md={4} lg={4}>
          <Image
            src="Assets/Colorfull.webp"
            rounded
            style={{ height: "14rem", width: "14rem" }}
          />
        </Col>
        <Col xs={12} sm={8} md={4} lg={4}>
          <Image
            src="Assets/Colorfull.webp"
            roundedCircle
            style={{ height: "14rem", width: "14rem" }}
          />
        </Col>
        <Col xs={12} sm={8} md={4} lg={4}>
          <Image
            src="Assets/Colorfull.webp"
            thumbnail
            style={{ height: "14rem", width: "14rem" }}
          />
        </Col>
      </Row>
    </Container>
  );
};
