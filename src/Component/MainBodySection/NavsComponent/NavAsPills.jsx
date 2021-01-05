import React from "react";
import { Nav } from "react-bootstrap";
export const NavAsPills = () => {
  return (
    <div>
      <br />
      <h4 className="text-left mt-4 mb-4">=== Nav As A Pills ===</h4>
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
