import React from "react";
import { Form } from "react-bootstrap";
export const FormSizing = () => {
  return (
    <div>
      <br />
      === Large Form ===
      <br />
      <Form.Control size="lg" type="text" placeholder="Large text" />
      <br />
      === Medium Form ===
      <Form.Control size="md" type="text" placeholder="Large text" />
      <br />
    </div>
  );
};
