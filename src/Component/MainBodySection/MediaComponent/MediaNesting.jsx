import React from "react";
import { Media } from "react-bootstrap";
export const MediaNesting = () => {
  return (
    <div>
      <br />
      <br />
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="Assets/RoyalFlower.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Basic Example Of Media Nesting</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="Assets/Rose.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Nested Media</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus.
              </p>
            </Media.Body>
          </Media>
        </Media.Body>
      </Media>
    </div>
  );
};
