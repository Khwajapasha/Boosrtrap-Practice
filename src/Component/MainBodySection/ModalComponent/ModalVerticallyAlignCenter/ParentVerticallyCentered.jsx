import React from "react";
import { Button } from "react-bootstrap";
import { ChildVerticallyCentered } from "./ChildVerticallyCentered";
export const ParentVerticallyCentered = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="mt-2"
      >
        Launch vertically centered modal
      </Button>

      <ChildVerticallyCentered
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ParentVerticallyCentered;
