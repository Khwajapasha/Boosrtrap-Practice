import React from "react";
import { Jumbotron, Button, Image } from "react-bootstrap";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
export const JumbotronBasicExample = () => {
  return (
    <div>
      <Jumbotron>
        <h1>Basic Example Of Jumbotron</h1>
        <Slider>
          <Image src="Assets/NewPickUpBizLogo.png" roundedCircle />
        </Slider>
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
