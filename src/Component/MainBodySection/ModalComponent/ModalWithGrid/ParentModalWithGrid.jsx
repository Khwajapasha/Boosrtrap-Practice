import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ChildModalWithGrid } from "./ChildModalWithGrid";
export const ParentModalWithGrid = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        className="mt-2"
      >
        Launch modal with grid
      </Button>

      <ChildModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
