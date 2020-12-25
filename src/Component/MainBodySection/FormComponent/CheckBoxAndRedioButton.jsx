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
      === CheckBox & Radio button in horizental line ===
      <br />
      <Form>
        {["checkbox", "radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check inline label="1" type={type} id={`inline-${type}-1`} />
            <Form.Check inline label="2" type={type} id={`inline-${type}-2`} />
            <Form.Check inline label="3" type={type} id={`inline-${type}-3`} />
            <Form.Check inline label="4" type={type} id={`inline-${type}-4`} />
          </div>
        ))}
      </Form>
    </div>
  );
};
