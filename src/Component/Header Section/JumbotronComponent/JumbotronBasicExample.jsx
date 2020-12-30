import React from "react";
import { Jumbotron, Button, Image } from "react-bootstrap";
export const JumbotronBasicExample = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Basic Example Of Jumbotron</h1>
        <marquee>
          <Image src="Assets/NewPickUpBizLogo.png" roundedCircle />
        </marquee>
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
