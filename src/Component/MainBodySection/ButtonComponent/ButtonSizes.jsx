import React from "react";
import { Button } from "react-bootstrap";

export const ButtonSizes = () => {
  return (
    <div>
        === Large Size Button ===
      <div className="mt-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{" "}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div className="mt-2">
        <Button variant="success" size="md">
          Medium Button
        </Button>
        <Button variant="danger" size="md">
          Medium Button
        </Button>
      </div>
      <div className="mt-2">
        <Button variant="primary" size="sm">
          Small button
        </Button>{" "}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
      <div>
        <Button variant="info" className="xs">XS</Button>
      </div>
    </div>
  );
};
