import React from "react";
import { Button } from "react-bootstrap";

export const ButtonSizes = () => {
  return (
    <div>
      <br />
      === Large Size Button ===
      <br />
      <br />
      <div className="mt-2">
        <Button variant="primary" size="lg">
          Large button
        </Button>{" "}
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </div>
      <div className="mt-2">
        <br />
        === Medium Size Button ===
        <br />
        <br />
        <Button variant="success" size="md">
          Medium Button
        </Button>
        <Button variant="danger" size="md">
          Medium Button
        </Button>
      </div>
      <div className="mt-2">
        <br />
        === Small Size Button ===
        <br />
        <br />
        <Button variant="primary" size="sm">
          Small button
        </Button>{" "}
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </div>
      <div>
        === Block Size Button ===
        <Button variant="primary" size="lg" block>
          Block level button
        </Button>
        <Button variant="secondary" size="lg" block>
          Block level button
        </Button>
      </div>
    </div>
  );
};
