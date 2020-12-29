import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

export const InputGroupAddOnAsButton = () => {
  return (
    <div>
      <div>
        <br />
        === Add On as A Button ===
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Prepend>
          <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
        <InputGroup>
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">Button</Button>
            <Button variant="outline-secondary">Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
};
