import React from "react";
import { Media } from "react-bootstrap";
export const MediaBasicExample = () => {
  return (
    <div>
      <br />
      <h5>
        === The media object helps build complex and repetitive components (e.g.
        blog comments, tweets, the like and more) ===
      </h5>
      <br />
      <Media style={{ width: "70%" }}>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="Assets/NewPickUpBizLogo.PNG"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Basic Example of Media </h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
};
