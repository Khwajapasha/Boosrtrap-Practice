import React from "react";
import { Row, Col } from "react-bootstrap";
import { HeaderSection } from "../Header Section/HeaderSection";
import { MainBodySection } from "../MainBodySection/MainBodySection";
import { LeftNavigationSection } from "../LeftNavigationSection/LeftNavigationSection";
export const Home = () => {
  return (
    <div>
      <Row>
        <Col>
          <LeftNavigationSection />
        </Col>
        <Col>
          <HeaderSection />
        </Col>

        <Col>
          <MainBodySection />
        </Col>
      </Row>
    </div>
  );
};
