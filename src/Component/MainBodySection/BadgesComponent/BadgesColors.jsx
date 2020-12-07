import React from "react";
import { Badge } from "react-bootstrap";
export const BadgeColors = () => {
  return (
    <div>
      <br />
      <br />
      === Colors Of Badges ===
      <br />
      <br />
      <Badge variant="primary">Primary</Badge>{" "}
      <Badge variant="secondary">Secondary</Badge>{" "}
      <Badge variant="success">Success</Badge>{" "}
      <Badge variant="danger">Danger</Badge>{" "}
      <Badge variant="warning">Warning</Badge>{" "}
      <Badge variant="info">Info</Badge> <Badge variant="light">Light</Badge>{" "}
      <Badge variant="dark">Dark</Badge>
      <br />
      <br />
      === Rounded Badges ===
      <br />
      <br />
      <Badge pill variant="primary">
        Primary
      </Badge>{" "}
      <Badge pill variant="secondary">
        Secondary
      </Badge>{" "}
      <Badge pill variant="success">
        Success
      </Badge>{" "}
      <Badge pill variant="danger">
        Danger
      </Badge>{" "}
      <Badge pill variant="warning">
        Warning
      </Badge>{" "}
      <Badge pill variant="info">
        Info
      </Badge>{" "}
      <Badge pill variant="light">
        Light
      </Badge>{" "}
      <Badge pill variant="dark">
        Dark
      </Badge>
    </div>
  );
};
