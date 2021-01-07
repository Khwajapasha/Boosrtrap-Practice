import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
export const NavbarBasicExample = () => {
  return (
    <div>
      <br />
      <h4>=== Basic Example of Navbar ===</h4>
      <Navbar bg="light" expand="lg" sticky="top">
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
          <Form inline>
            <FormControl placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
