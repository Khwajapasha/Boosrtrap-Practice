import React from "react";
import { Button } from "react-bootstrap";
export const ButtonOutLine = () => {
  return (
    <div className="mt-2">
      <br />
      === Outline Buttons ===
      <br />
      <br />
      <Button variant="outline-primary">Primary</Button>{" "}
      <Button variant="outline-secondary">Secondary</Button>{" "}
      <Button variant="outline-success">Success</Button>{" "}
      <Button variant="outline-warning">Warning</Button>{" "}
      <Button variant="outline-danger">Danger</Button>{" "}
      <Button variant="outline-info">Info</Button>{" "}
      <Button variant="outline-light">Light</Button>{" "}
      <Button variant="outline-dark">Dark</Button>
    </div>
  );
};
