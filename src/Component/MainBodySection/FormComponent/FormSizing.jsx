import React from "react";
import { Form } from "react-bootstrap";
export const FormSizing = () => {
  return (
    <div>
      <br />
      === Large Form ===
      <br />
      <Form.Group>
        <Form.Control size="lg" type="text" placeholder="Large text" />
        <br />
        === Medium Form ===
        <Form.Control size="md" type="text" placeholder="Large text" />
        <br />
        === Small Form ===
        <Form.Control size="sm" type="text" placeholder="Large text" />
        <br />
      </Form.Group>
      <Form.Group>
        === Large form as select ===
        <br />
        <Form.Control as="select" size="lg">
          <option>Large select</option>
        </Form.Control>
        <br />
        === Default OR Medium form as Select ===
        <br />
        <Form.Control as="select">
          <option>Default select</option>
        </Form.Control>
        <br />
        === Small form as Select ===
        <br />
        <Form.Control as="select" size="sm">
          <option>Small select</option>
        </Form.Control>
        <br />
      </Form.Group>
    </div>
  );
};
