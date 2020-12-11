import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
export const ButtonGroups = () => {
  return (
    <div className="mt-2">
      <br />
      === Button's Groups === <br />
      <br />
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Left</Button>
        <Button variant="secondary">Middle</Button>
        <Button variant="secondary">Right</Button>
      </ButtonGroup>
    </div>
  );
};
