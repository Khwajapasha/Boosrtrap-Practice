import React from "react";
import { Row, Col, ListGroup, Tab } from "react-bootstrap";
import { FigureImage } from "../ImagesComponent/FigureImage";
import { CardImageOverlay } from "../CardsComponent/CardImageOverlay";
export const ListGroupTabbedInterface = () => {
  return (
    <div>
      <h2>Tab Interface in List Group</h2>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Link 2
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <FigureImage />
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardImageOverlay />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};
