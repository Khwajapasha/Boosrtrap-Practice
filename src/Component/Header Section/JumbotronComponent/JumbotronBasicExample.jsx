import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
export const JumbotronBasicExample = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Basic Example Of Jumbotron</h1>
        <p>
          This is the basic example of jumbotron by using Jumbotron tag and it
          is having one button
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};
