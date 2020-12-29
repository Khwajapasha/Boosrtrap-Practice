import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
export const MultipleInputGroupsAddOn = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>First and last name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl />
        <FormControl />
      </InputGroup>
    </div>
  );
};
