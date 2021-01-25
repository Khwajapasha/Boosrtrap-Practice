import React from "react";
import { Media } from "react-bootstrap";
export const MediaASList = () => {
  return (
    <div className="mt-4">
      <ul className="list-unstyled">
        <Media as="li" style={{ backgroundColor: "pink" }}>
          <img
            width={64}
            height={64}
            className="mr-3 "
            src="Assets/Rose.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>List-based media object 1</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
        <Media as="li" style={{ backgroundColor: "pink" }} className="mt-2">
          <img
            width={64}
            height={64}
            className="mr-3"
            src="Assets/Rose.jpg"
            alt="Generic placeholder"
          />
          <Media.Body>
            <h5>List-based media object 2</h5>
            <p>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
              in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </p>
          </Media.Body>
        </Media>
      </ul>
    </div>
  );
};
