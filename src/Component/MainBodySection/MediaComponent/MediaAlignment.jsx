import React from "react";
import { Media } from "react-bootstrap";
export const MediaAlignment = () => {
  return (
    <div>
      <Media style={{ backgroundColor: "pink" }}>
        <img
          width={64}
          height={64}
          className="align-self-start mr-3"
          src="Assets/Rose.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Align Start</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
      <br />
      <Media style={{ backgroundColor: "pink" }}>
        <img
          width={64}
          height={64}
          className="align-self-center mr-3"
          src="Assets/Rose.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Align Center</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p>
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
      <br />
      <Media style={{ backgroundColor: "pink" }}>
        <img
          width={64}
          height={64}
          className="align-self-end mr-3"
          src="Assets/Rose.jpg"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Align End</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
            scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum
            in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
            nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>

          <p className="mb-0">
            Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
            leo. Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </p>
        </Media.Body>
      </Media>
    </div>
  );
};
