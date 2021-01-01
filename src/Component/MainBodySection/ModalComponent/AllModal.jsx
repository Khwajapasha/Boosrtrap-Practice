import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { ModalBasicExample } from "./ModalBasicExample";
import { ModalFunctionalClickable } from "./ModalFunctionalClickable";
import { ModalStaticBackdrop } from "./ModalStaticBackdrop";
import { ModalWithoutAnimation } from "./ModalWithoutAnimation";
import { ModalVerticallyCenter } from "./ModalVerticallyAlignCenter/ModalVerticallyCenter";
import { ModalWithGrid } from "./ModalWithGrid/ModalWithGrid";
import { ModalOptionalSize } from "./ModalOptionalSize";

export const AllModal = () => {
  const [show, setShow] = useState(false);
  return (
    <React.Fragment>
      {show && (
        <div>
          <ModalBasicExample />
          <ModalFunctionalClickable />
          <ModalStaticBackdrop />
          <ModalWithoutAnimation />
          <ModalVerticallyCenter />
          <ModalWithGrid />
          <ModalOptionalSize />
        </div>
      )}
      <div className="mt-2">
        <Button onClick={() => setShow(!show)}>Load All Modals</Button>
      </div>
    </React.Fragment>
  );
};
