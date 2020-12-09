import React from "react";
import { Button } from "react-bootstrap";
export const ButtonStates = () => {
  return (
    <div>
      <div className="mt-2">
        <br />
        === Active Buttons ===
        <br />
        <br />
        <Button variant="primary" size="lg" active>
          Primary button
        </Button>{" "}
        <Button variant="secondary" size="lg" active>
          Button
        </Button>
      </div>
      <div>
        <br />
        === Disable Buttons ===
        <br />
        <br />
        <Button variant="primary" size="lg" disabled>
          Primary button
        </Button>{" "}
        <Button variant="secondary" size="lg" disabled>
          Button
        </Button>{" "}
        <Button href="#" variant="secondary" size="lg" disabled>
          Link
        </Button>
      </div>
    </div>
  );
};
