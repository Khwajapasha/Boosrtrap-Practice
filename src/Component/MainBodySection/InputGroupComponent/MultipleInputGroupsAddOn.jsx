import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
export const MultipleInputGroupsAddOn = () => {
  return (
    <div>
      <div>
        <br />
        === Multiple Input Group ===
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
          <FormControl />
        </InputGroup>
      </div>
      <div>
        <bbr />
        === Multiple Add Ons ===
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Recipient's username"
            aria-label="Amount (to the nearest dollar)"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Amount (to the nearest dollar)"
          />
          <InputGroup.Append>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    </div>
  );
};
