import React from "react";
import { Badge, Button } from "react-bootstrap";
export const BadgesBasicExample = () => {
  return (
    <div>
      <br />
      <br />
      === Basic Example Of Badges===
      <br />
      <br />
      <h1>
        Example heading <Badge variant="secondary">H1 Badge</Badge>
      </h1>
      <h2>
        Example heading <Badge variant="secondary">New</Badge>
      </h2>
      <h3>
        Example heading <Badge variant="secondary">New</Badge>
      </h3>
      <h4>
        Example heading <Badge variant="secondary">New</Badge>
      </h4>
      <h5>
        Example heading <Badge variant="secondary">New</Badge>
      </h5>
      <h6>
        Example heading <Badge variant="secondary">New</Badge>
      </h6>
      {/* Badges can be used as part of links or buttons to provide a counter. */}
      <Button variant="primary">
        Profile <Badge variant="light">9</Badge>
        <span className="sr-only">unread messages</span>
      </Button>
    </div>
  );
};
