import React from "react";
import { ModalBasicExample } from "./ModalBasicExample";
import { ModalFunctionalClickable } from "./ModalFunctionalClickable";
import { ModalStaticBackdrop } from "./ModalStaticBackdrop";
import { ModalWithoutAnimation } from "./ModalWithoutAnimation";

export const AllModal = () => {
  return (
    <div>
      <ModalBasicExample />
      <ModalFunctionalClickable />
      <ModalStaticBackdrop />
      <ModalWithoutAnimation />
    </div>
  );
};
