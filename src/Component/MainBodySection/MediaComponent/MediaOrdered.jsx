import React from "react";
import { Media } from "react-bootstrap";
export const MediaOrdered = () => {
  return (
    <div className="mt-4">
      <Media style={{ backgroundColor: "pink" }}>
        <Media.Body>
          <h5>Media Ordered</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </Media.Body>
        <img
          width={64}
          height={64}
          className="ml-3"
          src="Assets/Rose.jpg"
          alt="Assets/Rose.jpg"
        />
      </Media>
    </div>
  );
};
