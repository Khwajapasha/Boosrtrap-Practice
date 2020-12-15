import React from 'react';
import {Card,Nav,Button} from "react-bootstrap"
export const CardNavigation = () => {
    return (
      <div className="mt-2">
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Navigation In Card</Card.Title>
            <Card.Text>
             This is the example of navigation links in card... 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
};

export default CardNavigation;