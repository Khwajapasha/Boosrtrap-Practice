import React from "react";
import { Button, Dropdown, ButtonGroup, SplitButton } from "react-bootstrap";
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
      <br />
      === Color Dynamically loaded & used SplitButton ===
      <br />
      {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
        (variant) => (
          <SplitButton
            key={variant}
            id={`dropdown-split-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
            className="ml-2"
          >
            <Dropdown.Item eventKey="1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="3" active>
              Active Item
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </SplitButton>
        )
      )}
    </div>
  );
};
