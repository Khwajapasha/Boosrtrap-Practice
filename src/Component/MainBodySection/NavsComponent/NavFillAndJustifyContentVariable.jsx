import React from "react";
import { Nav } from "react-bootstrap";
export const NavFillAndJustifyContentVariable = () => {
  return (
    <div className="justify-content-center mt-2">
      <h4>Nav Fill & Justify Content to Take Full Width OF variable</h4>
      <p>
        Force the contents of your nav to extend the full available width. To
        proportionately fill the space use fill. Notice that the nav is the
        entire width but each nav item is a different size.
      </p>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
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
