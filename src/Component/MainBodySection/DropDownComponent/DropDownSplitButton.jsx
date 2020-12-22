import React from "react";
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
export const DropDownSplitButton = () => {
  return (
    <div className="mt-2">
      <br />
      === Split DropDown Button ===
      <br />
      <Dropdown as={ButtonGroup}>
        <Button variant="success">Split Button</Button>

        <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
