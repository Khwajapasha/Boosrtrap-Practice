import React from "react";
import { ModalBasicExample } from "./ModalBasicExample";
import { ModalFunctionalClickable } from "./ModalFunctionalClickable";
import { ModalStaticBackdrop } from "./ModalStaticBackdrop";
import { ModalWithoutAnimation } from "./ModalWithoutAnimation";
import { ParentVerticallyCentered } from "./ModalVerticallyAlignCenter/ParentVerticallyCentered";

export const AllModal = () => {
  return (
    <div>
      <ModalBasicExample />
      <ModalFunctionalClickable />
      <ModalStaticBackdrop />
      <ModalWithoutAnimation />
      <ParentVerticallyCentered />
    </div>
  );
};
