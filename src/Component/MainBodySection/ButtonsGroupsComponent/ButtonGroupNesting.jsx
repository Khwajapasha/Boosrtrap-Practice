import React from "react";
import { ButtonGroup, DropdownButton, Button, Dropdown } from "react-bootstrap";
export const ButtonGroupNesting = () => {
  return (
    <div className="mt-2">
      <br />
      === Nesting of buttons in groups button ===
      <br />
      <br />
      <ButtonGroup>
        <Button>1</Button>
        <Button>2</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </div>
  );
};
