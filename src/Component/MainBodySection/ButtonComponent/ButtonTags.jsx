import React from "react";
import { Button } from "react-bootstrap";
export const ButtonTags = () => {
  return (
    <div className="mt-2">
      <br />
      === Tag Buttons ===
      <br />
      <br />
      <Button href="https://react-bootstrap.github.io/components/buttons/">
        Link
      </Button>{" "}
      <Button type="submit">Button</Button>{" "}
      <Button as="input" type="button" value="Input" />{" "}
      <Button as="input" type="submit" value="Submit" />{" "}
      <Button as="input" type="reset" value="Reset" />
    </div>
  );
};


