import React from "react";
import { Form } from "react-bootstrap";
export const FormControlComp = () => {
  return (
    <div>
      <br />
      === Form Control ===
      <br />
      <br />
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>
    </div>
  );
};
