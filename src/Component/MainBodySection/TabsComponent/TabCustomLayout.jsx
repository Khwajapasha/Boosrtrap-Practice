import React from "react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import { CardBasicExample } from "../CardsComponent/CardBasicExample";
import { CardImageOverlay } from "../CardsComponent/CardImageOverlay";
export const TabCustomLayout = () => {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <CardBasicExample />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <CardImageOverlay />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
