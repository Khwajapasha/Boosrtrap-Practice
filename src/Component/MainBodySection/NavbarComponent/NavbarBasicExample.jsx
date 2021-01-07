import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
export const NavbarBasicExample = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Navbar Basic Example</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home +</Nav.Link>
            <Nav.Link href="#home">Link +</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown ">
              <NavDropdown.Item href="#action/3.1">Action1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Action 2</NavDropdown.Item>
              <NavDropdown.Item href="#2.3">Action3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Seprated Link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
