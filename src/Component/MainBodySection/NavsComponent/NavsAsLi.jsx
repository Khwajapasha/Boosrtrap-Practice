import React from "react";
import { Nav } from "react-bootstrap";
export const NavsAsLi = () => {
  return (
    <div className="float-right">
      <br />
      <h4>=== Nav as "ul" & Nav.Item as "li" ===</h4>
      <Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="disabled" disabled>
            Link
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
