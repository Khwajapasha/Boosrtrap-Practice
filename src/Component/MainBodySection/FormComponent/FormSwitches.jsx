import React from "react";
import { Form } from "react-bootstrap";
export const FormSwitches = () => {
  return (
    <div>
      <br />
      === Switch Buttons ===
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Check this switch"
        />
        <Form.Check
          type="switch"
          id="custom-switch1"
          label="Check this switch"
        />
        <Form.Check
          type="switch"
          id="custom-switch2"
          label="Check this switch"
        />
        <Form.Check
          type="switch"
          id="custom-switch3"
          label="Check this switch"
        />
      </Form>
    </div>
  );
};
