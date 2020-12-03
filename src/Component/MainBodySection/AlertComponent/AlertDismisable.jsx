import React, { useState } from "react";
import { Button, Alert } from "react-bootstrap";
export const AlertDismisable = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      )}
      <Button onClick={() => setShow(true)}>Show Dismiss Alert</Button>
      
    </div>
  );
};
