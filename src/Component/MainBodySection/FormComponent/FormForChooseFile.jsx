import React from "react";
import { Form } from "react-bootstrap";
export const FormForChooseFile = () => {
  return (
    <div>
      === Form Control For Choose File & Attach ===
      <br />
      <br />
      <Form style={{ width: "18rem", marginLeft: "30rem" }}>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" />
        </Form.Group>
      </Form>
    </div>
  );
};
