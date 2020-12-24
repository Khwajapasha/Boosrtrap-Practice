import React from "react";
import { Form } from "react-bootstrap";
export const CheckBoxAndRedioButton = () => {
  return (
    <div>
      <br />
      === CheckBox & Radio Buttons (Dynamically loaded)===
      <br />
      <Form>
        {["checkbox", "radio"].map((type) => (
          <div key={`default-${type}`} className="mb-3">
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />
            <Form.Check
              type={type}
              id={`default-${type}`}
              label={`default ${type}`}
            />
          </div>
        ))}
      </Form>
    </div>
  );
};
